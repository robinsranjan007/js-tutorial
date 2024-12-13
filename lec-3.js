// DATATYPE CONVERSION

let score =33;
let scores ="33abc"

console.log(typeof score) //number

let newScore = String(score)  //string

console.log(typeof newScore)

let notnumber = Number(scores); //it will covert but give you a different value like NaN 

console.log(notnumber) //NaN

 

console.log(Number(null),typeof Number(null)) //conversion of null to number gives 0 so datatype will be number

console.log(Number(true),typeof Number(true))//


console.log(Number(true),typeof Number(true))
console.log(Number(' abc'),typeof Number(''))
console.log(Number(undefined),typeof Number(undefined))

console.log(Boolean(null),typeof Boolean(null))
console.log(Boolean(undefined), typeof Boolean(undefined))
console.log(Boolean(undefined), typeof Boolean(undefined))


console.log(String(1),typeof String(1))
console.log(String(true),typeof String(true))
console.log(String(false),typeof String(false))
console.log(String(false),typeof String(false))
console.log(String(undefined),typeof String(undefined))
console.log(String(null),typeof String(null))


// conversion to number
// null ----> 0 
//true-----> 1
//false ----> 0
//"33abc" --->NaN
// " "  ----> 0
//undefined ----> NaN


//conversion to boolean
//1 ------> true
// '' ---> false
// 'afds'  ----> true
// null ----> false
// undefined ----> false

//conversion to stirng
// 1--------> '1'
//true -----> 'true
//false -------> 'false'
//undefined ---->'undefined'
//null --------> 'null'
