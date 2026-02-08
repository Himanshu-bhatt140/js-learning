// it tells about the current context

const user ={
    uname:"himanshu",
    price:50,
    welcomeMsg : function(){
        console.log(`${this.uname}, welcome to website`);
        
    }

}

// user.welcomeMsg()
// Output
// himanshu, welcome to website

user.uname="sam"
user.welcomeMsg()
// Output
// sam, welcome to website

// function chai(){
//     let uname="sun"
//     console.log(this.uname);
// }
// chai()
// Output
// undefined

// Means here the this worked only when it was declared in function inside object then only it is working and not working standalon on function


// Arrow function
// const chai = () =>{
//     const uname="himanshu";
//     console.log(this.uname);
    
// }
// chai()

// Output
// undefined

const addTwo = (n1,n2) =>{
    return n1+n2
}

console.log(addTwo(2,4));
