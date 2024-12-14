//ARRAYS IN JS

let myarray =[0,1,2,3,4,5,"true",false]

console.log(myarray[2])

const newarray = new Array(1,2,'Array')

 



let marvelheros= ['spiderman','ironman','thor']
let dcheros = ['batman','superman','aquaman']


//  marvelheroes.push(dcheros)
console.log(marvelheros) //[ 'spiderman', 'ironman', 'thor', [ 'batman', 'superman', 'aquaman' ] ]
// console.log(marvelheros[3][2])


newheros=marvelheros.concat(dcheros)  //concat returns new arrays 

console.log(newheros)


//SPREAD OPERATOR   method-2

let desiHeros = ['shaktiman','nagraj','bheem']
let antiheros = ['kimada','robins','ranjan']

console.log([...desiHeros,...antiheros])


let nestedarrays=[1,2,3,[4,5,6],7,[8,9,[10,11,12]]]

let freeArray= nestedarrays.flat(Infinity);

console.log(freeArray)

console.log(Array.from("robins"))

console.log(Array.from({name:"robins"})) //if it cannot convert then it return empty array

let score1=10
let score2=30
let score3=40

console.log(Array.of(score1,score2,score3))
console.log(Array.of(score1,score2,"ranjan"))

