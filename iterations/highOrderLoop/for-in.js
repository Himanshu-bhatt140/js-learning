const myObj = {
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
}

for(const key in myObj){
    // console.log(key);
    
}

// It wil return all the keys
// js
// cpp
// rb
// swift
for(const value in myObj){
    // console.log(myObj[value]);
    
}
// Output
// now it will return the values of Object
// javascript
// C++
// ruby
// swift by apple

// for in loop works in arrays as well ublike for of also it will return the index,value,complete array

const arr = [1,2,3,4,5,6]
for (key in arr){
    // console.log(key);
    
}

// output
// 0
// 1
// 2
// 3
// 4
// 5

for(i in arr){
    console.log(arr[i],i)
    
}

