const express = require('express')
const app = express()
const port = 3000
const web = require('./routes/web')
const connectDb = require('./database/connectDb')



//link image
app.use(express.urlencoded({ extended: false }))
//css
app.set('view engine', 'ejs')
//connectDb
connectDb()
//userinsert
app.use(express.static('public'))
//route load
app.use('/', web)
//server create
app.listen(port, () => {
    console.log(`server start localhost ${port}`)
})