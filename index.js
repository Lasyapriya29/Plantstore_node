const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const ejs = require('ejs')

const app = express()

app.use(bodyparser.urlencoded({extended:true}))
app.set("view engine",'ejs')
app.use(express.static("public"))

mongoose.connect("mongodb+srv://saginetilasya29:Lalapri*123@cluster0.zg3xewy.mongodb.net/")

const userschema = mongoose.Schema({
    name:String,
    email:String,
    number:String,
    password:String
})

const User = mongoose.model("User",userschema)

app.get("/",function(req,res)
{
    res.render("index")
})

app.get("/index",function(req,res){
    res.render("index")
})

app.get("/about",function(req,res){
    res.render("about")
})

app.get("/categories",function(req,res){
    res.render("categories")
})

app.get("/login",function(req,res){
    res.render("login")
})

app.get("/register",function(req,res){
    res.render("register")
})

app.get("/plants",function(req,res){
    res.render("plants")
})

app.get("/bouquet",function(req,res){
    res.render("bouquet")
})

app.get("/flowers",function(req,res){
    res.render("flowers")
})

app.get("/products",function(req,res){
    res.render("products")
})

app.get("/contact",function(req,res){
    res.render("contact")
})

app.get("/miniature",function(req,res){
    res.render("miniature")
})

app.post("/register",function(req,res){
    var data = new User(req.body)
    data.save()
    .then(item => {
        res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });


    console.log(req.body)
})


// app.get("/index",function(req,res){
//     res.sendFile(__dirname+"/index")
// })

app.listen(2929,()=>{
    console.log("I am working")
})


