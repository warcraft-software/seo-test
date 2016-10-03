var express = require('express'),
	request = require('request'),
	bodyParser = require('body-parser'),
	methodOverride = require("method-override"),
	_ = require('underscore'),
	app = express(),
	router = express.Router(),
	port = 8080,
	serverRoute = 'https://www.walmart.com.mx/webControls/',
	//serverRoute = 'https://148.250.191.34:8080/webControls/',
	perimitirCrossDomain = function(req, res, next) {
	  res.header('Access-Control-Allow-Origin', '*');
	  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	  res.header('Access-Control-Allow-Headers', 'Content-Type');
	  next();
	};

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

process.on('uncaughtException', function(error) {
  console.log('OMG an error\n');
  console.log(error);
  // process.exit(1)
})

router.get('/webControls/:handler', function(req, res) {
	var queryObj = req.query;
	var handler = req.params.handler;

	if (_.keys(queryObj).length) {
		var queryStr = '?' + _.map(queryObj, function(val, key) {
			return (key + '=' + val);
		}).join('&');
	} else {
		var queryStr = '';
	}

	var defaultURL = serverRoute + req.params.handler + queryStr;

	request.get(defaultURL, function(error, response, body) {
		res.send(body);
	});
});

// router.post('/webControls/:handler', function(req, res) {var handler = req.params.handler; var queryObj = req.query; var defaultURL = serverRoute + handler; console.log(defaultURL); request({url: defaultURL, method: "POST", json: true, body: queryObj }, function(error, response, body) {/*res.set({"Content-Type": "application/json"}).status(200)*/ if (handler === 'hlDoLogin.ashx') {res.send('1'); } else {res.send(body); } }); });

app.use(bodyParser.urlencoded({ extended: false }))
	.use(bodyParser.json())
	.use(bodyParser.json({ type: 'application/vnd.api+json' }))
	.use(methodOverride('X-HTTP-Method-Override'))
	.use(perimitirCrossDomain)
	.use(router)
	.use(express.static(__dirname + '/public'))
	.get('*', function(req, res) {
		res.sendFile(__dirname + '/public/index.html')
	})
	.listen(port, function() {
		console.log("Node server running on:", port)
	});

