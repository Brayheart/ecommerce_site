console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {sequelize} = require('./models')
const morgan = require('morgan')
const config = require('./config/config')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors()) // sercurity risk?

require('./routes', (app))

sequalize.sync()
.then(() => {

  app.listen(process.env.PORT || 8081)
  console.log(`server started on port ${config.port}`)
})

app.listen(process.env.PORT || 8081)
