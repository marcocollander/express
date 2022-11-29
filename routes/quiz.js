const express = require('express');
const router = express.Router();
const Quiz = require('../models/qiuz');

/* GET quiz page. */
router.get('/', (req, res) => {
  const show = !req.session.vote;
  Quiz.find({}, (err, data) => {
    let sum = 0;
    data.forEach((item) => {
      sum += item.vote;
    });

    res.render('quiz', { title: 'Quiz', data, show, sum });
  });

  // new Quiz({
  //   title: 'Ile koncertów fortepianowych skompponował Chopin',
  //   vote: 0,
  // }).save(); Tworzy model w bazie mongoDB
});

router.post('/', (req, res) => {
  const id = req.body.quiz;

  Quiz.findOne({ _id: id }, (err, data) => {
    data.vote = ++data.vote;
    data.save((err) => {
      req.session.vote = 1;
      res.redirect('/quiz');
    });
  });
});

module.exports = router;
