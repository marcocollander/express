const express = require('express');
const router = express.Router();
const login = 'admin'
const password = '2023'

/* GET home page. */
router.get('/', (req, res) => {
	const url = req.url;
	res.render('index', { title: 'Express' });
});

router.get('/login', (req, res) => {
	res.render('login', { title: 'Logowanie' });
});

router.post('/login', (req, res) => {
	const body = req.body;
	console.log(body);

	if(body.login === login && body.password === password){
		req.session.admin = 1;
		res.redirect('/admin')
	} else {
		res.redirect('/login')
	}

});

module.exports = router;

