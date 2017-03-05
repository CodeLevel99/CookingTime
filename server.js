var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();

app.disable('x-powered-by');

app.set('port', process.env.PORT || 3000);
//app.use(express.static(path.join(__dirname, 'public'))); insert path here
app.use(express.static(path.join(__dirname))); 

router.get('/', function(req, res) {
	res.sendFile('/timer.html');
});

router.get('*', function(req, res) {
	throw new Error();
});

router.use(function(err, req, res, next) {
	res.status(404).send("404 Not Found");
});

app.use('/', router);

var server = app.listen(app.get('port'), function() {
		var host = server.address().address
   		var port = server.address().port
   
   		console.log("App listening at http://%s:%s", host, port);
});