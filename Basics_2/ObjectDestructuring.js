// Create a object course

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
 
// Now to access any key of that object- (Destructuring)
// console.log(course.courseInstructor);   // hitesh

// But this is a very ineffective way. Instead we can-

const {courseInstructor} = course;
console.log(courseInstructor);  // hitesh

// or we can give any another name to the key & use it as-
const {courseInstructor: Instructor} = course;
console.log(Instructor);  // hitesh