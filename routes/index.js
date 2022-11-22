const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  const url = req.url;
  res.render('index', { title: 'Express' });
});

module.exports = router;

