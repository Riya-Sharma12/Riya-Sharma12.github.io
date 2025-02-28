// function declaration -> disadvantages - we can create two functions with the same name 2. we can call function before declaring it

print("riya");

function print(a){
    //console.log(a);
}
function print(a){
   // console.log("hi", a);
}

print("khushi"); 
//output -> hi riya , hi khushi

///   fucntion expression -> 
var print = function a(){
    //console.log("hello world");
}
print(); // hello world
//a() // error

// ananymous function assignment 

var call = function(){
    //console.log("helo ji ,kya haal chal");
}
call() // hello ji kya haal chal

// ->    arrow fucntion
var name = (naam)=>{
    console.log(naam);
}

//name("riya"); // riya
name; // prints nothing


function hello(){
    //console.log("duniaaa");
}
// hello();
//console.log(hello);  // [Function: hello]

// question 

var sum = (a,b,c)=>{
    function print(){
        // console.log("hello world!.. aaj hum padh rhe h functions");
    }
    print();
    return a+b+c;
}
print();
// console.log(sum(1,2,3));

function add(a,b){
    return a+b;
}
//console.log(add(1,2));


