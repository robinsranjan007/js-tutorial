// comparision of datatypes

console.log(2>1)
console.log(2<1)
console.log(2==1)
console.log(2!=1)


//comparison of different datatypes

console.log("2">1)  //JS AUTOMATICALLY CONVERTS INTO NUMBER
console.log("02">1) 
console.log("abc2">=1)  

console.log(null)
console.log(null >0)
console.log(null <0)
console.log(null >=0,"T") //TRUE value conversion problem it converts the null into 0
console.log(null <=0) //TRUE value conversion problem i converts the null into 0
console.log((null) ==0)
console.log(Number(null) ==0)
console.log(null !=0)


console.log(undefined)

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)
console.log(undefined <= 0)
console.log(undefined >= 0)


//Strict Check  it checks values and datatypes as well

console.log('2'===2)  //false


