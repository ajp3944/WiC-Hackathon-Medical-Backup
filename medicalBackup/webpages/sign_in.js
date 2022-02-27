/**
 * Initiates the Sign-In Page of Website
 */

const express = require('express');
const app = express();
const path = require('path');

// Grabs CSS Stylesheet
app.use(express.static(path.join(__dirname,'css')));

// Shows the actual HTML Page
app.use('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'signin.html'));
});

 // Shifts HTML Page to New Page            -may need to get rid of or change 'use' to 'get'
 app.get('/schedule', (req, res) => {
    res.sendFile('./schedule.html', {root: __dirname});
})

// Port Number
app.listen(3000);

app.get('/', (req, res) => {
    res.sendFile('https://api.web3.storage/car/_', {root: __dirname});
})

app.get('/test', (req, res) => {
    res.sendFile('https://api.web3.storage/car/bafybeihkm5y7q6ye3at6co43ekz64f6nvn4576m2pfghhlj4ldgssvn6fe', {root: __dirname});
})