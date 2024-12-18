//CHAINING MODIFYING MAP AND FILTER

const books = [
    { title: "To Kill a Mockingbird", genre: "Fiction", publishedYear: 1960, edition: "1st" },
    { title: "1984", genre: "Dystopian", publishedYear: 1949, edition: "1st" },
    { title: "The Great Gatsby", genre: "Classic", publishedYear: 1925, edition: "2nd" },
    { title: "The Catcher in the Rye", genre: "Fiction", publishedYear: 1951, edition: "1st" },
    { title: "The Hobbit", genre: "Fantasy", publishedYear: 1937, edition: "3rd" },
    { title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", publishedYear: 1997, edition: "1st" },
    { title: "The Lord of the Rings", genre: "Fantasy", publishedYear: 1954, edition: "1st" }
  ];
  

//modifying and chaining


books.forEach((val)=>val.edition="1st")  //original array mofied

let newversion=books.map((val)=>({...val,publishedYear:2000})).filter((val)=>val.genre==="Fantasy")


console.log(newversion)


//ACCUMALATOR

let mynum = [12,34,56,76,54,56,43]

let sum=mynum.reduce((acc,current)=>(acc+current),0)


console.log(sum)





//
const novels = [
  { title: "To Kill a Mockingbird", genre: "Fiction", publishedYear: 1960, edition: "1st" },
  { title: "1984", genre: "Dystopian", publishedYear: 1949, edition: "1st" },
  { title: "The Great Gatsby", genre: "Classic", publishedYear: 1925, edition: "2nd" },
  { title: "The Catcher in the Rye", genre: "Fiction", publishedYear: 1951, edition: "1st" },
  { title: "The Hobbit", genre: "Fantasy", publishedYear: 1937, edition: "3rd" },
  { title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", publishedYear: 1997, edition: "1st" },
  { title: "The Lord of the Rings", genre: "Fantasy", publishedYear: 1954, edition: "1st" }
];


const booksWithPrice = books.map((val,index)=>{
  return {
    ...val,
    price:index*10+9.99
  }
})


// console.log(booksWithPrice);

let totalPrice = booksWithPrice.reduce((acc,curr)=>{
  return acc+curr.price;
},0)

console.log(totalPrice)