
const express = require ("express");
const bodyParser= require("body-parser");
const validator= require("express-validator");
const restaurant = require("./restaurant");


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(validator());



app.post("/new",(req,res) => {
    
    req.checkBody("date","Error Message...").notEmpty();
    req.checkBody("name","Error Message...").notEmpty();
    req.checkBody("people","Error Message...").notEmpty();
   

    var errors = req.validationErrors();
    if (errors){
        res.status(500).send(errors);
    }
    else{
        var m= new retaurant.Restaurant(req.body.date, req.body.name, req.body.people)
        restaurant.addNewData(m)
        res.send(m);
       
    }
    
    
});

app.get("/all",(req,res) => {
  res.send(restaurant.fetchData());
   
});

app.get("/details",(req,res) => {
   res.send(restaurant.getById(req.query.id));
   
    });

app.put("/update",(req,res) => {
    var m= new retaurant.Restaurant(req.body.date, req.body.name, req.body.people)
    res.send(restaurant.updateData(m,req.body.id))
});
app.delete("/delete",(req,res) => {
    res.send(retaurant.deleteData(req.body.id))
});


app.listen(4000)


