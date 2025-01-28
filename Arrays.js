// using var,const,let

function arrayConcept(){
    const arr=[1,2,3,4];
    console.log("Array is :"+arr);
    
}
// If you will call outside of the fxn then it throw error
// var list=arr.valueOf(); 
// console.log("list is "+list);

arrayConcept();


console.log("---------------------------------------------------------------------------------------------------------------");


const fruits = ["Banana", "Orange", "Apple", "Mango"];

// 1. for loop 
for(let i=0;i<fruits.length;i++){
    console.log(" fruits has "+fruits[i]);
}

console.log("---------------------------------------------------------------------------------------------------------------");

// 2. for..of loop
for(let x of fruits.values()){
    let duplicateFruitVariable="";
    duplicateFruitVariable+=x;
    console.log("duplicateFruitVariable is "+duplicateFruitVariable);
}
console.log("---------------------------------------------------------------------------------------------------------------");


const listArray=fruits.values();  // values() return object of fruits array
//for(let i=0;i<listArray.length;i++){    } it cannot use with Iterator
// object returned by fruits.values() is an iterator and not a traditional array. 
// Objects conforming to the iterator protocol in JavaScript. They provide a .next() method, which returns { value: ..., done: ... } pairs. 
// Iterators do not have a length property or array-like indexing.
for(let i of listArray){
    console.log(" listArray has "+i);
}

console.log("---------------------------------------------------------------------------------------------------------------");

//3. for each loop
fruits.forEach(element => {
    console.log(" fruits Array has "+element);
});

console.log("---------------------------------------------------------------------------------------------------------------");

//  valueOf() return same array without any changes in it.
// return its value with comma seperated
var list=fruits.valueOf(); 
console.log("list is "+list);