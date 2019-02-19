const express = require('express');
const request = require('request');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
	res.sendFile('src/index.html')
});

router.get('/data', (req, res) => {
	request('https://rss.itunes.apple.com/api/v1/kz/apple-music/coming-soon/all/50/explicit.json', 
		{ json: true }, (err, response, body) => {
		  res.json(response.body);
		});
});

module.exports = router;
