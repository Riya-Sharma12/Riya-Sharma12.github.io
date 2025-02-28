//question 1 ....
const username = prompt("Enter your name");
//console.log(username);

// question 2
const arr = [];
const name = prompt("Enter your name");
for(let i = 0; i<5; i++){
    const marks = prompt("enter mark");
    arr[i] = marks;
}
console.log(arr);

// question 3 
let sum = 0;
for(let ele of arr){
  sum = sum + ele;
}
console.log((sum/5)*100);

//question 4 - print the highesr marks scored

let high = -1;
for(let i=0; i<arr.length; i++){
    if(arr[i]>high){
        high = arr[i];
    }
}
console.log(high);