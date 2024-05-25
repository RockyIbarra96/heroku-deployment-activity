// Require needed modules
const express = require('express')

// initialize the app object
const app = express()

require('dotenv').config()
const PORT = process.env.PORT

//create a homepage route. 
app.get('/', function(req, res) {
    //this gets sent to the client
    res.send('Hello World')
})

//listen for connections
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))

module.exports = app;