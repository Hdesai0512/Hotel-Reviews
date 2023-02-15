const express = require('express');
const mongoose= require('mongoose')
require('dotenv').config();


const reviewersRouters = require('./controllers/reviewers')
const reviewsRouters= require('./controllers/reviews')

const app = express();


//Routes

const PORT = process.env.PORT || 8080;
// db connection
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

app.listen(PORT, console.log(`Listening on port ${PORT}`))