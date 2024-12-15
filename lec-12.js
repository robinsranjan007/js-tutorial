//OBJECTS DESTRUCTURING


const course={
    cname:"js in hindi",
    price :"9999",
    courseInstructor:"hitesh",

}


// METHOD -1   too much work

// course.cname
// course.price
// course.courseInstructor


const {courseInstructor:instra,price,cname} =course;

console.log(instra,price)