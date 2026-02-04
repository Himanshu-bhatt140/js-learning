// SingleTon Objects

const tinder = new Object();
// console.log(tinder);

// Output
// {}

tinder.email="himanshu@gmail.com";
// console.log(tinder);

// Insert nested object inside an object

const user ={
    name:"Himanshu Bhatt",
    course:"MCA",
    address:"Uttarakhand",
    city:"Haldwani"
}

const anotherUser = {
    email:"test@gmail.com",
    fullname:{
        userfullName:{
            fistname:"himanshu",
            lastname:"bhatt"
        }
    }
}



// How to access a nested object
// Access the value of firstname

// console.log(anotherUser.fullname.userfullName.fistname)
// Output => himanshu

// How to copy one object to another
// 1. Using object.assign()
// 2. Using spread operator

// 1. Using Object.assign()
// const combineObj = Object.assign(user,anotherUser)
// console.log(combineObj)
// Output
// {
//   name: 'Himanshu Bhatt',
//   course: 'MCA',
//   address: 'Uttarakhand',
//   city: 'Haldwani',
//   email: 'test@gmail.com',
//   fullname: { userfullName: { fistname: 'himanshu', lastname: 'bhatt' } }
// }

// 2. Using Spread Operator
// const combineObj = {...user,...anotherUser}
// console.log(combineObj)
// Output
// {
//   name: 'Himanshu Bhatt',
//   course: 'MCA',
//   address: 'Uttarakhand',
//   city: 'Haldwani',
//   email: 'test@gmail.com',
//   fullname: { userfullName: { fistname: 'himanshu', lastname: 'bhatt' } }
// }

// how to get the values of key and what is the type of that extracted value
console.log(Object.keys(user))
// Output => It will return all the key in array format
// [ 'name', 'course', 'address', 'city' ]

// I want all the values of key and value pair but in array
console.log(Object.entries(user))
// Output => It will return every key and value in a single array means jey value pair in a single array then other ...
//   [ 'name', 'Himanshu Bhatt' ],
//   [ 'course', 'MCA' ],
//   [ 'address', 'Uttarakhand' ],
//   [ 'city', 'Haldwani' ]

// I want to check if the value exists or not in an object
console.log(Object.hasOwnProperty("name"))
// It will return the value if exists in boolean true or false => true
