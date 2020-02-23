const express = require('express');
const hbs  = require('hbs');

var app = express();

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

app.listen(3000 ,() => {
   console.log('listening on port 3000');
});