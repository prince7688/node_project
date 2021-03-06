const express = require('express');
const hbs  = require('hbs');


var app = express();
// const request = require('request');

var port = process.env.port || 3000;
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname  + '/views/partials');                   

hbs.registerHelper('getCurrentYear' , () => {
      return new Date().getFullYear();
});

hbs.registerHelper('screamIt' , (text) => {
     
      return text.toUpperCase();
});

app.get('/', (req,res) => {

     res.render('home.hbs' , {  
          
        pageTitle : 'My Home Page',
        welcomeMessage : 'Welcome to my website'
     })
});

app.get('/about', (req,res) => {

       res.render('about.hbs', {
           
          pageTitle : 'My about page'
       });
});

app.listen(port ,() => {
   console.log('listening on port ' + port);
});