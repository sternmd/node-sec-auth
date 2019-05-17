const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://locahost:27017/auth');



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`started on port ${port}`);
})