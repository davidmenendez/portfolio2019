const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Front End Web Developer' });
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

router.get('/portfolio', (req, res) => {
  res.render('portfolio', { title: 'portfolio' });
});

module.exports = router;
