//FOR EACH LOOP MOST USED LOOPS


//on arrays of objects

const superheroes = [
    {
      name: "Peter Parker",
      alias: "Spider-Man",
      powers: ["Wall-Crawling", "Super Strength", "Spider-Sense", "Web-Shooting"],
      city: "New York"
    },
    {
      name: "Bruce Wayne",
      alias: "Batman",
      powers: ["Martial Arts", "High Intelligence", "Stealth", "Wealth"],
      city: "Gotham"
    },
    {
      name: "Clark Kent",
      alias: "Superman",
      powers: ["Super Strength", "Flight", "Heat Vision", "X-Ray Vision"],
      city: "Metropolis"
    },
    {
      name: "Diana Prince",
      alias: "Wonder Woman",
      powers: ["Super Strength", "Agility", "Flight", "Lasso of Truth"],
      city: "Themyscira"
    },
    {
      name: "Tony Stark",
      alias: "Iron Man",
      powers: ["Genius Intelligence", "Powered Armor Suit", "Missiles", "Flight"],
      city: "New York"
    }
  ];
  
 

  superheroes.forEach((val)=>{
    console.log(val)
  })


superheroes.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})

superheroes.forEach((val)=>{
    console.log(val.name,val.city)
})



//on plain arrays

  const cities = ["New York", "Gotham", "Metropolis", "Themyscira", "Central City", "Asgard", "Wakanda"];

 cities.forEach((val,index,arr)=>{
    console.log(val,index,arr)
 })


// on object

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


//in function

function printme(name) {
    console.log(`my name is ${name}`);
  }
  
  // Array of names
  const names = ["Peter", "Bruce", "Clark", "Diana", "Tony"];
  
  // Using forEach to call printme for each name
  names.forEach(printme);
  