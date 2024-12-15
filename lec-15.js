//Scope


var c=300
let b=200


 if(1)
 {
    let a=10;

    let b =20; //remove let meaning just b=20 then it will overwrite the global variable
    
    var c= 30;

    console.log(b)
 }

 //console.log(a) //error
 //console.log(b)//error
 console.log(c) //30
 console.log(b)


  