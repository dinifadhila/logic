const fs= require("fs");

class Movie{
    constructor (title,synopsis,duration,rating,actors,genre){
        this.id= new Date().valueOf();
        this.title = title;
        this.synopsis= synopsis;
        this.duration= duration;
        this.rating= rating; 
        this.listOfActor= actors;
        this.genre= genre;
    }

}

var fetchData= () =>{
    try{
        return JSON.parse(fs.readFileSync("data.json"))
    } catch (error){
        return [];
        
    }
}

var addNewData= (obj) =>{
    let array = fetchData();
    array.push(obj)

    fs.writeFileSync("data.json", JSON.stringify(array));
}

var getById = (id) =>{
    let array = fetchData();
    let result= {};
    for (let i = 0; i <array.length; i++){
        if (array[i].id == id)
        return array[i]; {
}
    }
    
        return result;
    }
    
    


var updateData=(obj) =>{
    let array= fetchData();
    let result= {};

    for (let i = 0; i <array.length; i++){
        
        if (array[i].id ==obj.id){
            result = array[i];
            array[i].title = (obj.title)? obj.title :array[i].title;
            array[i].synopsis = (obj.synopsis)? obj.synopsis :array[i].synopsis;
            array[i].duration = (obj.duration)? obj.duration :array[i].duration;
            array[i].listOfActor = (obj.listOfActor)? obj.listOfActor :array[i].listOfActor;
            array[i].genre = (obj.genre)? obj.genre :array[i].genre;

            break;
        }

}
fs.writeFileSync("data.json", JSON.stringify(array));
return result;
}
var deleteData=(obj) =>{ 
    let array= fetchData();
    let result= {};
    for (let i = 0; i <array.length; i++){
        if (array[i].id == id)
        result= array[i];
        array.splice(i,1)
        break;
    }
    fs.writeFileSync("data.json", JSON.stringify(array));
    return result;
}



//  var getAll= (obj) =>{
//    let array = fetchData();
//     fs.writeFileSync("data.json", JSON.stringify(array,undefined,2));
// }



module.exports ={
    Movie,
    addNewData,
    fetchData,
    getById,
    updateData,
    deleteData
}

