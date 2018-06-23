var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//port to connect for heroku
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: false}));
 
// req for using handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//req our js file for what to do with our data entries from the user
var routes = require('./controllers/burgers_controllers');
app.use('/', routes);

app.listen(PORT, function() {
  console.log("Listening on Port:", PORT);
});