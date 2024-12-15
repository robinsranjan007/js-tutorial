//ARROW FUNCTIONS AND THIS FUNCTION


// this keyword gives current context


 const user ={
    username:"hitesh",
    price:999,
    welcomeMessage:function()
    {
        console.log(` ${this.username} welcome to webseite`)
        console.log(this)
    }
 }


 user.welcomeMessage()
 user.username ="Sam"
 user.welcomeMessage()

 console.log(this)  //empty cause we are in the node environmnet



function chai()
{
    let username= "hitesh"
   // console.log(this)  //you will get many values

   console.log(this.username)  //undefined   --- cannot use this for the function context it will always give 
}


// chai()


const coffee=()=>{
    let user="choudhary"
    console.log(this)  //here it gives empty parenthesis but in the normal function it return many values
}

// coffee()




//-------------------arrow function exaple-------------------


const addTwo=(num1,num2)=>{
    return num1+num2;     //explicit return 
}

const addthree=(num1,num2,num3)=>num1+num2+num3  // implicit return no return keyword is used

const addsome=(val,val2)=>( val+val2)  //if you use curly braces { } then you need to write the return keyword

const returObject=(val)=>({name:"robins",age:"18"}) // returning object you need ( )
 


 