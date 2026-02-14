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
// console.log(newNum);

// Filter Example

const books = [
    {
        title:"Book One", genre:"Fiction",publish:1981,edition:2004
    },
    {
        title:"Book Two", genre:"Non-Fiction",publish:1982,edition:2008
    },
    {
        title:"Book Three", genre:"History",publish:1999,edition:2009
    },
    {
        title:"Book Four", genre:"Non-Fiction",publish:1989,edition:2010
    },
    {
        title:"Book Five", genre:"Science",publish:2009,edition:2012
    },
    {
        title:"Book Six", genre:"Fiction",publish:1987,edition:2006
    },
    {
        title:"Book Seven", genre:"History",publish:1983,edition:1999
    },
    {
        title:"Book Eight", genre:"Science",publish:1971,edition:2004
    },
]

// I want the books whose publish year is before 1980

// const bookfilter = books.filter((bk) =>   bk.genre==="History")


// const bookFilter = books.filter((bk)=>{
//     return bk.genre === "Fiction"
// })

// I want the books published befor 1995 and the genre should be Non-Fiction

const bookFilter= books.filter((bk)=>{
    return bk.publish <= 1995 && bk.genre==="Non-Fiction"
})

console.log(bookFilter);
