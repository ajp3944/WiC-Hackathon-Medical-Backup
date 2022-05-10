const express = require('express')
const api_helper = require('./API_helper')
const app = express()
const port = 3000

/*
* Route to DEMO the API call to a REST API Endpoint 
* REST URL : https://jsonplaceholder.typicode.com/todos/1
*/
app.get('/getAPIResponse', (req, res) => {
    api_helper.make_API_call('https://api.web3.storage/car/bafybeihrdgvotkj7xbh3jsdk37m3rgkhk25jb7hfk4rehbfcnlwrtvorme')
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))