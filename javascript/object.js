const obj = {
    name: "riya",
    branch : "cse",
    age : 21,
    name: "khushi"
}

//console.log(obj);   // { name: 'khushi', branch: 'cse', age: 21 }
// accessing any value :

//console.log(obj.name);

// adding any value to a object :: 
obj.country = "india"
//console.log(obj);  //{ name: 'khushi', branch: 'cse', age: 21, country: 'india' }


//  updating any value ->
// obj.name = " shubh"
// console.log(obj);

// deleting any value ...
delete obj.city;
console.log(obj);