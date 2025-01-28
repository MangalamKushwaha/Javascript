//let,var,const
// 1. var
// The var keyword is used to declare a variable. It has a function-scoped or globally-scoped behaviour.
// variables declared by the var keyword cannot be block-scoped.
// A global scope variable is a variable declared in the main body of the source code, outside all functions.
// var can be redeclare 
// var n=12; // global variable
// var n=16;
// console.log("value of n is :"+n);

{
    var n=85;
    // console.log("value of n is :"+n);
}
console.log("value of n is :"+n);



console.log("---------------------------------------------------------------------------------------------------------------");




//2. Let (ES6 Feature)
// The variables which are declared inside the { } block are known as block-scoped variables.


{
    let num=9;  // local variab;e
    console.log("value of num is :"+num);

}

// console.log("value of num is :"+num); // if we call outside ythe it throws error

// // let cannot redeclare inside same block
// redeclare allowed in different blocks{}

    let name ="Mangalam"; // global variable b/c outside of block
    {
        let name="Nischay"; // local variable
     // let name="werftgy"; // throw error
        console.log("value of na,e is :"+name);
    }

    console.log("value of num is :"+name);

console.log("---------------------------------------------------------------------------------------------------------------");

// 3. const
// const must be initialize during declaration
// once its value initialized it cannot change it's value

// const x; // wrong 
// x = 12;
// connsole.log("x is :"+x); // trow error 

const x=12; // right b/c x is declared & initialzed
console.log("x is :"+x);

const arr1 = ["pankaj", "sumit", "chandan", "ajay"];
console.log("Array is "+arr1);
arr1[1]="Nischay"; // allowed to modify the contents of the array, such as adding, removing, or changing elements.
console.log("Modified Array is :"+arr1.toString());

// you cannot change the person here but you can change vale of the inside element of constant person
const person = {
    first_name: "Pankaj",
    first_name: "Nischay", // redclaration allowed of content only of person object 
    last_name: "Singh",
    Age: 20,
    About: "Web Developer and Competitive Programmer"
};
console.log("Type of person object : "+typeof(person.first_name)); 
console.log("person object has "+person);  // it will return object
console.log("person object has "+JSON.stringify(person)); // to convert json object into string we use JSON.stringfy() method

// It is possible
person.first_name = "Aryan";
person.last_name = "Yadav";
person.Age = 22;
person.About = "Commerce undergraduate";
console.log("person object has "+JSON.stringify(person)); // to convert json object into string we use JSON.stringfy() method


// it is not possible
// const person={ // yaha par dubara person declare kar rahe hai to error aayega
// "first_name":"Akash",
// "last_name":"Rao",
// "Age":22,
// "About":"Science undergraduate"
// }
// console.log("person has :"+JSON.stringify(person));


function constInsideFxn(){
    const mob=1234567890;
    console.log("Mobile No. is :"+mob);
}
constInsideFxn();
// console.log("Mobile No. is :"+mob); // not acessible outside the fxn

