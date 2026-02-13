// when using foreach it expected a callback function that is called as a high order
// in call back function function name is not required

const coding = ["js", "ruby", "cpp", "python", "swift"];

// Using normal function
coding.forEach(function (item) {
    // console.log(item);
}
)

// Output
// js ruby cpp python swift

// using arrow function
coding.forEach((item) => {
    // console.log(item);
    
} )

// Output
// js ruby cpp python swift

// passing a function inside foreach

function forEachDemo(){
    console.log("Print For Each");
    
}

// While passing a function we only need to pass the reference not the function execution
// coding.forEach(forEachDemo)

// What if i executes the function

// coding.forEach(forEachDemo())
// Output
// it will throw an error that undefined is not a function


// when using for each it will not only return value but it can return index,value,complete array as well

coding.forEach((index,item,arr) => {
    // console.log(index,item,arr);
    
} )

// Output

// it will return index value & array
// js 0 [ 'js', 'ruby', 'cpp', 'python', 'swift' ]
// ruby 1 [ 'js', 'ruby', 'cpp', 'python', 'swift' ]
// cpp 2 [ 'js', 'ruby', 'cpp', 'python', 'swift' ]
// python 3 [ 'js', 'ruby', 'cpp', 'python', 'swift' ]
// swift 4 [ 'js', 'ruby', 'cpp', 'python', 'swift' ]


const myProgramming = [
    {
        languageName:"java",
        languageFileName:"java",
    },
    {
        languageName:"python",
        languageFileName:"py",
    },
    {
        languageName:"javascript",
        languageFileName:"js",
    },
]
myProgramming.forEach((item) =>{
    console.log(item.languageName);
    
} )

// Output 
// it will return the languageName
// java python javascript
