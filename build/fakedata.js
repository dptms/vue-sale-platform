var express = require('express')
var app = express()

var appData = require('../data.json')
var apiRoutes = express.Router()

apiRoutes.get('/api', function (req, res) {
    res.json(appData)
})

module.exports = apiRoutes