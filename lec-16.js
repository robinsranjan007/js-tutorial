// nested scope

function one()
{
const username ="hitesh choudhary"
function two()
{
    const website ="youtube"
    console.log(username)
}

// console.log(website)
two()
}

// one()

if(true)
{
    const username = "hitesh"

    if(username === "hitesh")
    {
        const website = " youtube"
        console.log(username+website);
        
    }

    // console.log(website); error
    

}

// console.log(username) error

// ---------------------------------------------------------------------------------------------------------------------------------

console.log(addOne(5))  //not error tho it is called before it is declared


function addOne(num)
{
return num+1;
}



console.log(addTwo(10))// gives error as it is called before the function is declared 

const addTwo = function(num)
{
    return num+5;
}