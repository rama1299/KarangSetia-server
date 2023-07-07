const express = require('express')
const router = express.Router()

const authRouter = require('./authRouter.js')

router.use(authRouter)

module.exports = router