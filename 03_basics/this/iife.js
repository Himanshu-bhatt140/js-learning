// imediately invoked function expression
// when don't want the global pollution and wants that function should called immediately
(
    function chai(){
        console.log("db connected");
        
    }
)();
(
    (name)=>{
        console.log(`db connected 2 ${name}`);
        
    }
)("himanshu")