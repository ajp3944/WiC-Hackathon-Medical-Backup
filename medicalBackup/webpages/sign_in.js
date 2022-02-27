const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile('./signin.html', {root: __dirname});
})

app.get('/schedule', (req, res) => {
    res.sendFile('./schedule.html', {root: __dirname});
})

app.listen(port, () => console.log(`listening on port ${port}!`));
