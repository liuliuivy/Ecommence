const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');
const path = require('path');

const items = require('./routes/api/items')

const app = express();

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db,{useNewUrlParser: true})
    .then(() => console.log('MongoDB connected successfully!'))
    .catch(err => console.log(err));

app.use('/api/items',items);

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`server started listen on port ${port}`));
