
/**
 * Module dependencies.
 */

var express = require('express')
  , partials = require("express-partials")
  , i18n = require("i18n-abide")
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();
app.use(function(req, res, next) {
	  res.locals.app_name = "Even117";
	  next();
	});
app.use(i18n.abide({
	  supported_languages: ['nl'],
	  default_lang: 'nl',
	  translation_directory: 'static/i18n'
	}));
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(partials());
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));



// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/contact', routes.contact);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
