const express = require('express')
const api_helper = require('./API_helper')
const app = express()
const port = 3000

/*
* Route to DEMO the API call to a REST API Endpoint 
* REST URL : https://jsonplaceholder.typicode.com/todos/1
*/
app.get('/getAPIResponse', (req, res) => {
    api_helper.make_API_call('https://api.web3.storage/status/bafybeidhsywkcnm4hygm7bz6nway4nlbmuf6spl4wvtrva2w2ijyv3wqre')
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))