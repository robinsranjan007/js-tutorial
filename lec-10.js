//OBJECTS


const jsuser={
    name:"robins",
    "full name":"robins ranjan",
    "age":18,
    location:"patna",
    email:"robinsgoogle.com",
    isloggedIn:false,
    lastloggingdays:['monday','saturday']
}


// access objects

console.log(jsuser.name,jsuser["age"])
console.log(jsuser['full name'])


//change

jsuser.email ="robinschatgpt.com"

 console.log(jsuser.email)

//  Object.freeze(jsuser)

 jsuser["full name"] ="hitesh choudhary"  //cannot be changed cause the object has been freeze
 console.log(jsuser['full name'])  


 //add function 

 jsuser.displayName=function(name){console.log(`hello ${name}`)}

 console.log(jsuser.displayName('ranjan'))


 console.log(jsuser.displayName) //[Function (anonymous)]  here the functon is not excecuted but we only have the reference of the function 


 //
 jsuser.greeting = function(){
    return `good morning ${this.name}`
 }

 console.log(jsuser.greeting())