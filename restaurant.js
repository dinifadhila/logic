const fs= require("fs");

class Restaurant{
    constructor (date,name,people){
        this.id= new Date().valueOf();
        this.date = date;
        this.name= name;
        this.people= people;
        
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
            array[i].date = (obj.date)? obj.date :array[i].date;
            array[i].name = (obj.name)? obj.name :array[i].neme;
            array[i].people = (obj.people)? obj.people :array[i].people;
            

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
    Restaurant,
    addNewData,
    fetchData,
    getById,
    updateData,
    deleteData
}

 