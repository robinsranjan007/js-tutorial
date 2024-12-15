//FUNCTION IN JS

function saymyname()
{

}

const sayhisname =function(){

}


function addnumbers(number1,number2)
{
     console.log(number1+number2,typeof (number1+number2) ) 
}


function addthreeenumbers(num1,num2,num3)
{
    return num1+num2+num3

    console.log("number added")   //this will be never be executed as it is after the return statement
}

addnumbers(10,20)
addnumbers(10,'20')
addnumbers('10',20)


const logginuser= function(username)
{
    return `${username} just logged in`
}

console.log(logginuser("hitesh"))
console.log(logginuser())  //this will give undefined



//DEFAULT VALUES

const userform =function(name,age=18,height="180cm")
{
    const form={
        name:name,
        age:age,
        height:height
    }

    return form
}

console.log(userform("robins"))
console.log(userform("robins",24,"181cm"))