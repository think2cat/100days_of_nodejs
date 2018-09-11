const fs = require('fs')

fs.readFile('../002/serve.js', (err, data) => {
	if (err) {
		console.log(err)
		return
	}
	console.log(data.toString())	
})