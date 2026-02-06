function addNumber() {
    let a = 10;
    let b = 20;
    return a + b;
}
// console.log(addNumber())

// what if we have n no. of arguments and we need to pass that
// we'll use rest opearator syntax is ... similar to spread
// rest operator is  simily bundle the values and combine then inside an array

function calculateCartPrice(...num) {
    return num
}

// console.log(calculateCartPrice(200, 300, 400, 500));
// Output [ 200, 300, 400, 500 ]

// what if more parameters are passes the used rest operator
// then the argumeents are passed without spread operator they will be be separator and after that the rest opearotor works as exprcted
function calculateCat(val1, val2, ...n) {
    return (val1, val2, n)
}
console.log(calculateCat(200, 400, 600, 800, 1200));


// how to access the values of objects inside functions

// const user = {
//     username: "himanshu",
//     price: "na"
// }

function testObj(obj) {
    return (`username is: ${obj.username}, and price is: ${obj.price}`);

}

console.log(testObj(user = {
    username: "himanshu",
    price: "na"
}))

const arr = ["himanshu", "bhatt"]
function testArr(arrs) {
    return arrs[0]
}

// console.log(testArr(arr));
