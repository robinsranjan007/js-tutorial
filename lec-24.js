//MAP IT RETURN THE VALUES


let mynums= [1,2,3,4,5,6,7,8,88]


let newnums=mynums.map((val)=>val*2)

console.log(newnums)


const books = [
    { title: "To Kill a Mockingbird", genre: "Fiction", publishedYear: 1960, edition: "1st" },
    { title: "1984", genre: "Dystopian", publishedYear: 1949, edition: "1st" },
    { title: "The Great Gatsby", genre: "Classic", publishedYear: 1925, edition: "2nd" },
    { title: "The Catcher in the Rye", genre: "Fiction", publishedYear: 1951, edition: "1st" },
    { title: "The Hobbit", genre: "Fantasy", publishedYear: 1937, edition: "3rd" },
    { title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", publishedYear: 1997, edition: "1st" },
    { title: "The Lord of the Rings", genre: "Fantasy", publishedYear: 1954, edition: "1st" }
  ];
  
 

 //use for each to modify all

 books.forEach((val)=>val.publishedYear=2000)


 let bookstitle = books.map((val)=>({...val}))

 console.log(bookstitle)


 //use map to modify and return and arrays 
 //NOTE FILTER MAP AND REDUCE ALWAYS RETURN AN ARRAY


 let modified= books.map((val)=>({
    ...val,
    publishedYear:1995
 }))

console.log(modified)



