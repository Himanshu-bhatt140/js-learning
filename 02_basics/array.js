// Array ccreate a shallow copy while copying the array means the array points the the same reference points
const arr = [1,2,3,4]
const arr2 =["shaktiman","nagraj"];
const arrDec = new Array(1,2,3)

// Array Methods

// push() = It will add a value at the last of an array 
// pop() = It will remove a value from the last whichever value is at last it will be removed
// unshift() = it will add a value at the start of the array
// shift() =it  will remove the value from the last
// const arr3 = arr.push(3)
// const arr3 = arr.pop()
// const arr3 = arr.unshift(3)
// const arr3 = arr.shift()
// console.log(arr)

// slice and splice
console.log("Original Array: ",arr );

// Slice = It will give the the value in range but will not include the last range value
const slice = arr.slice(1,3)
console.log("Slice Array: ",slice );
console.log("After Slice Original Array: ",arr );

// Splice =  it will manipulate the value of a given range and now it will include the last range also means maniplate the original array

const splice = arr.splice(1,3)
console.log("splice Array: ",splice );
console.log("After splice Original Array: ",arr );