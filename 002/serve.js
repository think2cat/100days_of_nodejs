const express = require('express')
let bodyParser = require("body-parser");
let app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	const now = new Date()
	res.sendFile( __dirname + '/index.html')
})

app.post('/post', (req, res) => {
	console.log(JSON.stringify(req.body))
	let html = 'user:' + req.body.user + '<br>'
	html += 'pass:' + req.body.pass + '<br>'
	res.send(html)
})

let server = app.listen(8080, () => {
	console.log('serve is running, http://' + server.address().address + ':' + server.address().port)
})