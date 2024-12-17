// Higer Order Function (HIF)

//for of

const students = [
    { 
      id: 1, 
      name: "Emily", 
      grades: { math: 90, science: 85 }
    },
    { 
      id: 2, 
      name: "David", 
      grades: { math: 80, science: 88 }
    },
    { 
      id: 3, 
      name: "Sophia", 
      grades: { math: 95, science: 92 }
    }
  ]

  for(let item of students)
  {
    console.log(item)
  }
  for(let item of students)
  {
    console.log(`the name of the student is ${item.name} and and its grades are ${item["grades"].math}`)
  }


  //on arrays 

  let str= "greetings"

  for(let i of str)
  {
    console.log(i)
  }


  //on arrays

  let arrs= [45,67,43,67]

  for(let a of arrs)
  {
    console.log(a)
  }

  //MAPS

  const map = new Map()

  map.set('IN',"India")
  map.set('USA',"United States of America")
  map.set('FR','France')

  for(let [m,n] of map)
  {
    console.log(m,' ---->'+n)
  }



  //

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


//   this IS NOT ITERABLE

//   for(let s of spiderman)
//   {
//     console.log(s)
//   }  