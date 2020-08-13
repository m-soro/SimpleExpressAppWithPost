# Simple Express App Recipe
*********************************
1. Install dependencies
    - npm init
    - npm install express --save
    - npm install ejs --save
    - npm install body-parser --save (used in forms)

2. Create app.js file
    - touch app.js  
    - add boiler plate express code
    ```
    var express = require('express');
    var app= express();
    var bodyParser = require('body-parser');

    app.use(bodyParser.urlencoded({extended: true}));

    app.use(express.static('public'));

    app.set('view engine', 'ejs');

    app.get('/', function(request, response){
      response.render('home');
    });

    app.listen(3000, function(){
      console.log('Server has started');
    });
    ```
3. Create neccessary directories and files
    - mkdir views
        - inside are pages like home.ejs etc.
    - your partials directory
        - contains your templates(header.ejs, footer.ejs, etc.)
    - mkdir public
        - inside are files like css
