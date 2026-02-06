let a = 10;
const b = 20;
var c = 30;

// console.log(a, b, c);

function scope() {
    var val = 50;
}

// console.log(val);

// Nested scope

function one() {
    const uname = "himanshu";
    function two() {
        const website = "youtube";
        console.log(uname);
    }
    // console.log(website);
    two()
}
one()
