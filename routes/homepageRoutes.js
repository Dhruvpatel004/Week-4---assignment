const express = require('express');
const router = express.Router();

// route : http://localhost:5001/
router.get('/', (req, res) => {
  res.status(200).send({ mess: 'Welcome To Home page' });
});

// route : http://localhost:5001/like/
router.get('/like', (req, res) => {
    res.status(200).send({ mess: 'Welcome To Like page' });
  });

module.exports = router;

