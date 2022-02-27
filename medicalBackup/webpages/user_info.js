const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile('./user_info.html', {root: __dirname});
})

app.get('/schedule', (req, res) => {
    res.sendFile('./schedule.html', {root: __dirname});
})

app.listen(port, () => console.log(`listening on port ${port}!`));
