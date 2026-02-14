const myNums = [1,2,3]
// const myTotal=myNums.reduce(function(accVal,currVal){
//     console.log(`Accumulator val = ${accVal}, Current Value= ${currVal}`);
    
//     return accVal+currVal
// },0)


// Using Arrow Functions

const myTotal=myNums.reduce((accVal,currVal)=>{
    // console.log(`Accumulator val = ${accVal}, Current Value= ${currVal}`);
    
    return accVal+currVal
},0)
// console.log(myTotal);

const shopingCart = [
    {
        itemName:"js Course",
        itemPrice:299
    },
    {
        itemName:"python",
        itemPrice:999
    },
    {
        itemName:"mobile dev",
        itemPrice:9999
    },
    
]
const newCart = shopingCart.reduce((acc,item,)=>{
    return acc+ item.itemPrice 
},0)
console.log(newCart);
