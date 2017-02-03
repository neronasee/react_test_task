const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));

app.post('/login', function(req, res) {
	setTimeout(() => {
		if(req.body.Username === 'User' && req.body.Password === 'Password') {
			res.send({
				Auth: "Logged",
				Language: "EN"
			});
		} else {
			res.send({Auth: "Denied"});
		}
	}, 1500);
});

app.listen(3001, function() {
	console.log('Listening...');
})
