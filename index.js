const express = require('express');
const methodOverride = require('method-override')
const mongoose= require('mongoose')
require('dotenv').config();


const reviewersRouters = require('./controllers/reviewers')
const reviewsRouters = require('./controllers/reviews')

const app = express();

// MIDDLEWARE
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.set('views', __dirname +'/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended: true}))




app.get('/', (req, res) => {
    res.send('<h1>main page</h1>')
})
//Reviews page
//const reviewsController= require('./controllers/reviews')
app.use('/reviews', reviewsRouters)
//Reviewers Page
//const reviewersController = require('./controllers/reviewers')
app.use('/reviewers',reviewersRouters)


// 404 page
app.get('*', (req,res) => {
    res.send('404')
})

//Routes
//app.use('/reviewers', reviewersRouters)
//app.use('/reviews', reviewsRouters)
const PORT = process.env.PORT || 8080;


// db connection
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

app.listen(PORT, console.log(`Listening on port ${PORT}`))