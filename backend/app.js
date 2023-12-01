const express = require('express')
const app = express()
const morgan = require('morgan')
require('dotenv').config()
const cors = require('cors')
require('./config/db')
app.use(morgan('dev'))
const PORT = process.env.PORT

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const userRoute = require('./routes/userRoute')
const dashRoute = require('./routes/projectdashRoute')
app.use('/user', userRoute )
app.use('/dash', dashRoute )



app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})

