const express = require('express')

let app = express()

app.get('/', (req, res) => {
	const now = new Date()
	res.send(now.toLocaleDateString() + ' ' + now.toLocaleTimeString())
})

let server = app.listen(8080, () => {
	console.log('serve is running, http://' + server.address().address + ':' + server.address().port)
})