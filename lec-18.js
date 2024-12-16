// Immediately Invoked Function Expression (IIFE)


(function chai()
{
    console.log('DB connected');
    
}());   // always add ; cause they dont know when to stop so use ; to stop the first IIFE 

(function two()
{
    console.log('two connected')
}());


 ((name)=>{
    console.log(`db three connected ${name}`)
 })("robins")
