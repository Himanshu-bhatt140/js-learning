const email = []
if (email) {
    // console.log("got user email");

} else {
    // console.log("don't have email");

}

// Falsy values => the values which are assumed to be false
// false,0,-0,BigInt 0n,"",null,undefined,NaN

// Truthy values => values which are assumed to be true
// "0","false"," ",[],{},function(){}

// check if array is empthy or not
if (email.length === 0) {
    // console.log(`array is empty`);

}

// Nullish Coalescing operator (??) : null, undefined

let val1;
// val1=10 ?? 15; => 10
// val1=null ?? 15; => 15
// val1=undefined ?? null ?? 25;  ==> 25
// val1=undefined ?? null ?? 25;  ==> 25




console.log(val1);
