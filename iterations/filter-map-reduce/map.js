const myNum = [1,2,3,4,5,6,7,8,9]
// const newNums=myNum.map((num)=>{
//     return num+10
// })
myNum.forEach((num) => {
  num = num+10
})
// console.log(myNum);

// OPtional Chaining

const newNums = myNum
                .map((num)=>num*10)
                .map( (num) => num+1 )
                .filter((num)=> num<=35)
console.log(newNums);
