// for-of loops are specifically designed to loop in arrays but they can be used in any

let number = [1, 2, 3, 4, 5, 6]
for (num of number) {
    // console.log(num);

}

// In string

let myStr = "hello showing the world"
for (str of myStr) {
    // console.log(`valu of str is : ${SVGFEGaussianBlurElement}`);

}

// Map
// It has unique values, it remember the order the values in whoch it was declared but objects can't
// ALSO we can use it as keys or values whochever we want 
// collection o key value pair

const maping = new Map();
maping.set('IN', 'India')
maping.set('US', 'United Stated')
maping.set('FR', 'France')

// console.log(maping);

// OutPut
// Map(3) { 'IN' => 'India', 'US' => 'United Stated', 'FR' => 'France' }

for (key of maping) {
    // console.log(key);

}

// Output 
// It will return the array
// [ 'IN', 'India' ]
// [ 'US', 'United Stated' ]
// [ 'FR', 'France' ]

// If i want the key only so use []

for ([key] of maping) {
    // console.log(key);

}
// Output
// It has shown all the keys of maping
// IN
// US
// FR

// Now if i want both keys and values then

for ([key, value] of maping) {
    console.log(key, ":-", value);

}
// Now it will return both key and value pairs
// IN :- India
// US :- United Stated
// FR :- France

// Use for of loop in object

const myObj = {
    game1: "nfs",
    game2: "test"
}

for(obj of myObj){
    // console.log(obj);
    
}

// When using forof with object it will show an error that it is not iterable
// myObj is not iterable