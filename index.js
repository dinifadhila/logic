
const express = require ("express");
const bodyParser= require("body-parser");
const validator= require("express-validator");
const movie = require("./movie");


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(validator());



app.post("/new",(req,res) => {
    
    req.checkBody("title","Error Message...").notEmpty();
    req.checkBody("synopsis","Error Message...").notEmpty();
    req.checkBody("duration","Error Message...").notEmpty();
    req.checkBody("rating","Error Message...").notEmpty();
    req.checkBody("genre","Error Message...").notEmpty();

    var errors = req.validationErrors();
    if (errors){
        res.status(500).send(errors);
    }
    else{
        var m= new movie.Movie(req.body.title, req.body.synopsis, req.body.duration, req.body.rating, req.body.listOfActor, req.body.genre)
        movie.addNewData(m)
        res.send(m);
       
    }
    
    
});

app.get("/all",(req,res) => {
  res.send(movie.fetchData());
   
});

app.get("/details",(req,res) => {
   res.send(movie.getById(req.query.id));
   
    });

app.put("/update",(req,res) => {
    var m= new movie.Movie(req.body.title, req.body.synopsis, req.body.duration, req.body.rating, req.body.listOfActor, req.body.genre)
    res.send(movie.updateData(m,req.body.id))
});
app.delete("/delete",(req,res) => {
    res.send(movie.deleteData(req.body.id))
});

//movielist
// add new movie
// get all movie
// get details
// update movie
// delete movie

//movie 
//title
//synopsis
//duration
//rating 
// list of actors
//genre


app.listen(3000)


