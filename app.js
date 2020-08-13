var express = require('express');
var app= express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.set('view engine', 'ejs');

var recipes = ['Chicken Schnitzel', 'Mayo and Mustard Baked Tilapia', 'Fresh Pasta with Shrimp Scampi'];

app.get('/', function(request, response){
  response.render('home')
});

app.post('/addrecipe', function(request, response){
  var newrecipe = request.body.newrecipe;
  // grabs the form input
  recipes.push(newrecipe);
  // adds the form input to the global variable(w/c will reset everytime the server restarts)
  // using a database will solve this.
  response.redirect('/recipes');
});

app.get('/recipes', function(request, response){
  response.render('recipes', {recipes: recipes}); // {in views: the recipes array}
});


app.listen(3000, function(){
  console.log('Server has started');
});
