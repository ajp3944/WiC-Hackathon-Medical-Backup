/**
 * Initiates the Page to Show Employee Schedule
 */

 const express = require('express');
 const app = express();
 const path = require('path');
 
 // Grabs CSS Stylesheet
 app.use(express.static(path.join(__dirname,'css')));
 
 // Shows the actual HTML Page
 app.use('/',(req,res,next)=>{
     res.sendFile(path.join(__dirname,'schedule.html'));
 });

 // Shifts HTML Page to New Page            -may need to get rid of or change 'use' to 'get'
 app.get('/patient_info', (req, res) => {
    res.sendFile('./patient_info.html', {root: __dirname});
})
 
 // Port Number
 app.listen(3000);