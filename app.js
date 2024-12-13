const express = require('express')
const app = express()
const port = 3000
const web = require('./routes/web')
const connectDb = require('./database/connectDb')
const session = require('express-session')



//link image
app.use(express.urlencoded({ extended: false }))
//css
app.set('view engine', 'ejs')
//connectDb
connectDb()
//userinsert
app.use(express.static('public'))
//connect flash seasion
const seasion =require('express-session')
const flash =require('connect-flash')
// massage
app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
}));
//flash massege
app.use(flash());
//route load
app.use('/', web)
//server create
app.listen(port, () => {
    console.log(`server start localhost ${port}`)
})