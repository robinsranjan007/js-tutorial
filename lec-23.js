let coding = ['python','java','js','ts']


// does not return values

const values = coding.forEach((val)=>{
    return val
})

console.log(values)


//FOR RETURNING VALUES WE USE MAP FILTER AND REDUCE

let mynums =[1,2,3,4,5,6,6,7]

let product=mynums.filter((val)=>{
  return val>6  
})
console.log(product)

let filt= mynums.filter((val)=>val>3)

console.log(filt)


const empty=[]


mynums.forEach((val)=>{
    if(val>4)
    {
        empty.push(val)
    }
})

console.log(empty)


//MORE EXAMPLE OF FILTER

const books = [
    {
      title: "To Kill a Mockingbird",
      genre: "Fiction",
      publishedYear: 1960,
      edition: "1st"
    },
    {
      title: "1984",
      genre: "Dystopian",
      publishedYear: 1949,
      edition: "1st"
    },
    {
      title: "The Great Gatsby",
      genre: "Classic",
      publishedYear: 1925,
      edition: "2nd"
    },
    {
      title: "The Catcher in the Rye",
      genre: "Fiction",
      publishedYear: 1951,
      edition: "1st"
    },
    {
      title: "The Hobbit",
      genre: "Fantasy",
      publishedYear: 1937,
      edition: "3rd"
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      genre: "Fantasy",
      publishedYear: 1997,
      edition: "1st"
    },
    {
      title: "The Lord of the Rings",
      genre: "Fantasy",
      publishedYear: 1954,
      edition: "1st"
    }
  ];

  
  const userBooks = books.filter((val)=>val.genre ==="Fantasy" && val.edition==="1st")

  console.log(userBooks)