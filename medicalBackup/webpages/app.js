const express = require('express')
const api_helper = require('./API_helper')
const app = express()
const port = 3000

/*
* Route to DEMO the API call to a REST API Endpoint 
* REST URL : https://jsonplaceholder.typicode.com/todos/1
*/
app.get('/getAPIResponse', (req, res) => {
    api_helper.make_API_call('https://api.web3.storage/status/bafybeihkm5y7q6ye3at6co43ekz64f6nvn4576m2pfghhlj4ldgssvn6fe')
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))