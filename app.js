const express = require('express');

const app = express();



app.use(express.static('public'));

app.use(require('./routes/index'));
app.use(require('./routes/albums'));




app.listen(4000, ()=>{
    console.log("running on port 4000")
})
