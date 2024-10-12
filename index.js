require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', function(req, res){
    return res.send('Api endpoint');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})