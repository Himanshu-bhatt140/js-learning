// Object Destructuring
const course={
    coursename:"js",
    price:999,
    courseInstructor:"Himanshu"
}

// Suppose i want the courseIntructor from the obj then we'll do
// console.log(course.courseInstructor)

// Now i want it multiple time so instead of repeating course.courseInstructor we'll destructure it
// const {courseInstructor} =course

// console.log(courseInstructor)

// if i want to name that key i can give that name  also
const {courseInstructor:instructor} =course
console.log(instructor)


// Json : Javascript object notation

// {
//     [
//         {
//             "name":"test",
//             "course":"js"
//         }
//     ]
// }
