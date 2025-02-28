// --------------------------------------- callback function -------------------------------------------------------
const fun = (a,b)=>{
    function x(){
       console.log("hello world");
    }
    x();
    console.log(a+b);
}
//fun(1, 2);

var f = (a,b,c)=>{
   const ans = a+b;
   c(ans);
}
f(1,2,call);

function call(txt){
    console.log("kya haal h bhyii");
    console.log(txt);
}

//disadvantage of callback - 1.callback hell 2. inversion of control

// const name = "riya";
// const last_name = "sharma"
// console.log(`${name} ' ' ${last_name}`);
// const ans = name + ' ' + last_name;
// console.log(ans);


