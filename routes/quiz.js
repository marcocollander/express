const express = require('express');
const router = express.Router();

/* GET quiz page. */
router.get('/', (req, res) => {
  const url = req.url;
  res.render('quiz', { title: 'Quiz' });
});

module.exports = router;
