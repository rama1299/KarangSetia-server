require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const morgan = require('morgan');
const router = require('./routes/index')
const errorHandler = require('./middlewares/errorHandler.js')

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(morgan('tiny'))
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(router)
app.use(errorHandler)

app.listen(port, (err) => {
    if(err) return console.log(err);
    console.log(`Server listening on port ${port}`)
})