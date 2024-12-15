//objec singleton

const tinderUser = new Object();

tinderUser.id="123abc"

tinderUser.name="Sammy"

tinderUser.isLoggedin=false;


const regularUser={
    email:"SomeEmail@gmail.com",
    fullname:{
        userFullName:"Hitesh",
        lastName:"choudhary"
    }
}



console.log(tinderUser)

console.log(regularUser.fullname.lastName)


//combining objects


const obj1={
    a:1,
    b:2,
    c:3
}

const obj2={
    d:4,
    e:5,
    f:6
}


const newobj ={obj1,obj2}


// METHOD-1
// const obj3= Object.assign(obj1,obj2)
//console.log( obj1,'THIS IS OBJECT 2')  //it just overwrites the original object 1


//METHOD-2
const obj4= Object.assign({},obj1,obj2)

console.log( newobj)
console.log( obj4)
console.log( obj1)


//METHOD-3 spread operator

console.log({...obj1,...obj2},'this is spread operator')


//objects from database

const userdatabse=[
    {
        name:'abc',
        age:18
    },
    {
        name:'def',
        age:28
    }
]

console.log(userdatabse[1].name) //nested objects

//OBJECTS.KEYS(NAME_OF_THE_OBJECTS)


console.log(Object.keys(tinderUser))  ///it gives arrays ********* vvery very important
console.log(Object.values(tinderUser))  ///it gives arrays ********* vvery very important
console.log(Object.entries(tinderUser))  ///it gives arrays ********* vvery very important
console.log(tinderUser.hasOwnProperty('name'))  //boolean