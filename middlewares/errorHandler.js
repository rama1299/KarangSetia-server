const errorHandler = (err, req, res, next) => {
    console.log(err);
  
    switch (err.name) {
        case 'IncompleteData':
            res.status(400).json({ message: 'Incomplete data!' });
            break;
        case 'EmailAlreadyExists':
            res.status(400).json({ message: 'Email already exists!' });
            break;
        case 'PasswordMustContainNumbers':
            res.status(400).json({ message: 'Password must contain at least one digit!' });
            break;
        case 'RegisterFailed':
            res.status(400).json({ message: 'Register failed!' });
            break;
        case 'VerificationOtpFailed':
            res.status(400).json({ message: 'Verification otp failed!' });
            break;
        default:
            res.status(500).json({ message: 'Internal server error!' });
            break;
    }
  }

module.exports = errorHandler