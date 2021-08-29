const express = require('express'); 
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser'); 

const app = express(); 
app.use(bodyParser.json()); 
//! Database Key. 
const db = require('./config/keys').mongoURI; 
//! Connect
mongoose.connect(db).then(() => console.log("Yay"))
.catch(err => console.log(err)); 



const port = process.env.PORT || 3000; 

app.listen(port, () => console.log(`server started on port ${port}`)); 





