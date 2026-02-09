// const isLoggedIn=false;
// if (isLoggedIn===true) {
//     console.log("User looged in");
    
// }else{
//     console.log("login first");
    
// }

const userLoggedIn =true;
const debitCard=true;
const isLoggedInFromGoogle=true;
const isLoggedInFromEmail=true;

if(userLoggedIn && debitCard){
    console.log(`Allowed to Shop`);
    
}
 if(isLoggedInFromGoogle || isLoggedInFromEmail){
    console.log(`User Logged in & allowed to proceed`);
    
}