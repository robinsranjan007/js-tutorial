// function continue

// suppose a person clicks on a multiple items to add in the cart so we gotta create a function which would take all the values with
//without declaring multile parameters 



//SOLUTION REST OPERATOR

const calculateCartPrice =function(...num1)
{
return num1; //it returs an array  [ 2, 3, 5 ]
}

console.log(calculateCartPrice(2,3,5,100,500))



//--------------------example-2-----------------------------
const calculatePrice =function(val1,val2,...num1)
{
return num1; //it returs an array  [ 2, 3, 5 ]
}


console.log(calculatePrice(12,13,56,78,99))



const handleObject = function(anyobject)
{

    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(
    {
        username:"robinsranjan",
        price:"9768"
    }
)


// --------------handle arrayus-------------

const handleArrays = function(arrays)
{
    return arrays[2]
}

console.log(handleArrays([2,3,4,5,6,7,7]))