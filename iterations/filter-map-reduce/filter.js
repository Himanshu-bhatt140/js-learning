const myNum=[1,2,3,4,5,6,7,8,9];
// const newNum = myNum.filter(num=>{
//     return num > 4
// })
// console.log(newNum);
// [ 5, 6, 7, 8, 9 ]

// if i want do same with forEach using the same
// const newNum = myNum.forEach((num)=>{
//     return num > 4
// })
// console.log(newNum);
// Output 
// It will return undefined as we cannot return a value same as filter

// if we want to achieve the same with foreach method we need to do additional stuff

let newNum = []
const numFor = myNum.forEach( (n) => {
    if(n>4){
        newNum.push(n)
        
    }
} )
console.log(newNum);

