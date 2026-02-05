const marvelHeros = ["thor","ironman","spiderman"];
const dcHeros = ["superman","flash","batman"]
const testHeros = ["superman","flash","batman"]
const anoHeros = ["superman","flash","batman"]

// Q: How to add to arrays

// marvelHeros.push(dcHeros) // it will add the array inside the array like [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvelHeros);

// Now  if i want to acces the value of flash
// console.log(marvelHeros[3][1]);

// We can add two array by using 2 methods
// 1. concat()
// 2. spread opoerator ...

// Using concat()
// const allHeros = marvelHeros.concat(dcHeros,testHeros,anoHeros)
// console.log(allHeros) => [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// Using spread operator
const allHeros = [...marvelHeros,...dcHeros] // =>[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
console.log(allHeros)

// isArray, ofArray, fromArray
