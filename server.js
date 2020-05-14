//Dependencies
const express = require('express')
const app     = express()
const PORT    = process.env.PORT || 3000
const bodyParser = require('body-parser')
const ejs = require('ejs')
const path = require('path')

// Routes:
// /admin/panel - admin panel 
// /search - search complaint
// /search/getdata - list complaints in table


//Middlewares
app.use(express.json({extended: false}))
app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))
app.set('views', path.join(__dirname, 'views'))

//Home routes
app.get('/', (req, res)=>{
    res.render('index.ejs')
})
app.get('/contact', (req, res)=>{
    res.render('contact.ejs')
})
app.get("/statement",(req,res)=>{
    res.render('statement')
});

//Routes
app.use('/search', require('./routes/api/search'))
app.use('/user', require('./routes/api/user'))
app.use('/admin', require('./routes/api/admin'))

//Server Start
app.listen(PORT, ()=> console.log(`Server started at ${PORT}`))