//Loops on object

const spiderman = {
    name: "Peter Parker",
    alias: "Spider-Man",
    age: 25,
    powers: ["Wall-Crawling", "Super Strength", "Spider-Sense", "Web-Shooting"],
    city: "New York",
    isAvenger: true,
    sayQuote: function() {
      console.log("With great power comes great responsibility.");
    }
  };


  for(let s in spiderman)
  {
    console.log(spiderman[s])
  }



 // for in loop in arrays

 let arr=[4,5,6,7,78]

 for(let a in arr)
 {
    console.log(a)  //it gives indexs
 }

 const products = [
    { 
      name: "Laptop", 
      price: 1000, 
      getDiscountedPrice: function(discount) {
        return this.price - (this.price * discount / 100);
      }
    },
    { 
      name: "Phone", 
      price: 500, 
      getDiscountedPrice: function(discount) {
        return this.price - (this.price * discount / 100);
      }
    }
  ];


  
  for(let p in products)
  {
    console.log(products[p])
  }


  //

  // Creating a new Map
 