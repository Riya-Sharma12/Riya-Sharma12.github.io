const arr =[1,2,"hello" , "hi"];
console.log(arr);  // [ 1, 2, 'hello', 'hi' ]

// adding elements to an array ->
arr.push(3);
console.log(arr);  // [ 1, 2, 'hello', 'hi', 3 ]

// accessing elements of an array ->
console.log(arr[3]);
 // updating any value 
 arr[2] = "amazon";
 console.log(arr); //  [ 1, 2, 'amazon', 'hi', 3 ]

 // dletng any value
 delete arr[4];
 console.log(arr); //  [ 1, 2, 'amazon', 'hi', <1 empty item> ]