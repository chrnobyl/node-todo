var express = require('express')
var app = express()
var mongoose = require('mongoose')
var config = require('./config')
var setupController = require('./controllers/setupController')
<<<<<<< HEAD
var apiController = require('./controllers/apiController');
=======
var apiController = require('./controllers/apiController')
>>>>>>> e6f9f2e1151dd3241b899a52069424b41366e370

var port =  process.env.PORT || 3000

app.use('/', express.static(__dirname + '/public'))

app.set('view engine', 'ejs')

mongoose.connect(config.getDbConnectionString())
setupController(app)
apiController(app)

app.listen(port)
