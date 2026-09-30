// routes/pageRoutes.js
const express = require('express');
const router = express.Router();

const events = [];//PLEASE ADD EVENTS INTO THIS ARRAY
const team = [];//TEAM INFO GOES HERE
const contactSubmissions = [];//temp array


// Home page
router.get('/', (req, res) => {
  res.render('pages/home', 
    {   
        currentPage: 'home', 
        title: 'Home - Community Portal',
        events : events
    }
  ); // home.ejs
});

// About page
router.get('/about', (req, res) => {
  res.render('pages/about', 
    {
        currentPage: 'about',
        title: 'About - Community Portal',
        team: team
   });
});

// Events page
router.get('/events', (req, res) => {
  res.render('pages/events',
    {
        currentPage: 'events',
        title: 'Events - Community Portal',
        events: events
  });
});

// Contact form
router.get('/contact', (req, res) => {
  res.render('pages/contact',
    {
        currentPage: 'contact',
        title: 'Contact - Community Portal'
  });
});

router.post('/contact', (req, res) => {
  // Store form submission in memory
  const {name, email, message} = req.body;
  contactSubmissions.push({name, email, message});
  res.redirect('/thankyou');
});

// Thank you page
router.get('/thankyou', (req, res) => {
  res.render('pages/thankyou',
  {
    currentPage: 'thankyou',
    title: 'Thank You - Community Portal'
  });
});

module.exports = router;

