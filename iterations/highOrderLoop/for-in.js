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
    console.log(myObj[value]);
    
}
// Output
// now it will return the values of Object
// javascript
// C++
// ruby
// swift by apple