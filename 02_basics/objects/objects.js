
// Define a object
// In js the keys are already considered as string not considered but they are string
const user = {
    uName:'Himanshu',
    "uAddress" : "Uttarakhand",
    designation :"Designer",
    preparingFor:"Developer",
    isSucceeded:"Not Yet",
    willSucceed:"Definitely"
}

// Access a value of key from an object
// Using dot notation
// console.log(user.willSucceed);

// Using "" string 
// console.log("Accessing using double commas:", user["preparingFor"])

// Double commas are used because some elements are defined in way that we dont have any other choices
// for eg : if we have an object key declared with "" like "uAddress"

// console.log(user["uAddress"]) ==> Uttarakhand

// How to declare a symbol inside an object and  then access that valiue
const sym = Symbol("Key1")
const userTwo = {
    uName:'Himanshu',
    "uAddress" : "Uttarakhand",
    [sym]:"This is symbol",
    designation :"Designer",
    preparingFor:"Developer",
    isSucceeded:"Not Yet",
    willSucceed:"Definitely"
}


userTwo.greetings = function(){
    console.log("demontrate how functions are injected")
}

// console.log(userTwo.greetings())

// How to restrict an  object to insert a value

// Before Restricting
// {
//   uName: 'Himanshu',
//   uAddress: 'Uttarakhand',
//   designation: 'Designer',
//   preparingFor: 'Developer',
//   isSucceeded: 'Not Yet',
//   willSucceed: 'Definitely',
//   greetings: [Function: abc],
//   [Symbol(Key1)]: 'This is symbol'
// }

// Restricted Object
Object.freeze(userTwo)

// tring to insert a value
userTwo.test = "hello Test "

console.log(userTwo)
// After Restricting test is not added
// {
//   uName: 'Himanshu',
//   uAddress: 'Uttarakhand',
//   designation: 'Designer',
//   preparingFor: 'Developer',
//   isSucceeded: 'Not Yet',
//   willSucceed: 'Definitely',
//   greetings: [Function: abc],
//   [Symbol(Key1)]: 'This is symbol'
// }


