const { Users, Verifications, sequelize } = require("../models");
const bcrypt = require("bcrypt");
const sendEmail = require("../email");

class authController {
  static async register(req, res, next) {
    try {
      const { name, address, phone_number, email, password, role } = req.body;

      if (!name || !address || !phone_number || !email || !password || !role) {
        throw { name: "IncompleteData" };
      }

      const existingUser = await Users.findOne({ where: { email } });
      if (existingUser) {
        throw { name: "EmailAlreadyExists" };
      }

      const passwordRegex = /\d/;
      if (!passwordRegex.test(password)) {
        throw { name: "PasswordMustContainNumbers" };
      }

      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(password, salt);

      let user, verificationOtp;

      await sequelize.transaction(async (t) => {
        user = await Users.create(
          {
            name,
            address,
            phone_number,
            email,
            password: hashPassword,
            role,
          },
          { transaction: t }
        );

        if (!user) {
          throw { name: "RegisterFailed" };
        }

        const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
        const hashOtp = bcrypt.hashSync(otp, salt);

        verificationOtp = await Verifications.create(
          {
            user_id: user.id,
            otp: hashOtp,
          },
          { transaction: t }
        );

        if (!verificationOtp) {
          throw { name: "VerificationOtpFailed" };
        }

        const emailOptions = {
          to: user.email,
          subject: "Verification OTP",
          html: `<p>Ini kode OTP kamu <b>${otp}</b></p>`,
        };

        const sendOtp = await sendEmail(emailOptions).catch(console.err);

        res.status(200).send({
          message: "email verification send successful, cek email",
          status: "PENDING",
        });
      });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {}

  static async verifyOtp(req, res, next) {}
}

module.exports = authController;
