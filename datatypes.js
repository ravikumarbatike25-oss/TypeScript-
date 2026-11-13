"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let num = 100;
console.log(num);
let name = "Ravi";
console.log(name);
let isenable = true;
console.log(isenable);
let nullvalue = null; //null is a value that is not defined
//let null=null;
console.log(nullvalue);
let undefinedvalue = undefined; //undefined is a value that is not defined
//let undefined=undefined;
console.log(undefinedvalue);
let memory = 100n;
//console.log(memory+10); //error because bigint is not a number
console.log(memory + 10n); //error because bigint is not a number
let arr = [1, 2, 3, 4, 5];
console.log(arr);
// array of strings
let arr2 = ["Ravi", "swty", "johney"];
console.log(arr2);
//any type is used to store any data type
let demo = 100;
console.log(demo);
demo = "Ravi";
console.log(demo);
console.log(typeof demo);
demo = true;
console.log(demo);
demo = [1, 2, 3, 4, 5];
console.log(demo);
console.log(typeof demo); //object
demo = { name: "Ravi", age: 20 };
console.log(demo);
console.log(typeof demo); //object
demo = function () {
    console.log("Hello World");
};
console.log(demo);
console.log(typeof demo); //function
let qa = 100;
console.log(qa);
console.log(typeof qa);
qa = "Ravi";
console.log(qa);
console.log(typeof qa);
// function is used to define a function
function test() {
    console.log("Hello World");
}
test();
function marks(strName, marks) {
    console.log(strName, marks);
}
marks("Ravi", 100);
marks("Swty", 200); //
marks("Johny", "100"); //error because string is not a number
marks("Johny", 100, 200); //error because function takes only two arguments
//function with never type
//never means:
//This function will never successfully return a value.
// function neverTest():never{
//     throw new Error("Error");
// }
// neverTest();
//union type is used to define a function that can take multiple data types
//Real-time example 1: API response
//Suppose an API returns a user ID. Depending on the backend, the ID might come as a number or string:
let id;
id = "ravi";
id = 123;
id = true;
id = "123";
console.log(id);
console.log(typeof id);
//array 
let ar = [10, 20, 30, 40, 50];
console.log(ar);
console.log(typeof ar);
console.log(ar[1]);
//string :This is very useful for data-driven testing
//Real-time example 2: Data-driven testing
//Suppose you're testing a login page. You might have different test cases with different usernames and passwords:
let str = ["ravi", "swty", "johney"];
console.log(str);
console.log(typeof str);
console.log(str[1]);
//tuple for fixed length and type of data
let tuple = ["ravi", 100, true];
console.log(tuple);
console.log(typeof tuple);
console.log(tuple[1]);
let tuple2 = ["ravi", 100, true];
console.log(tuple2);
console.log(typeof tuple2);
console.log(tuple2[1]);
tuple2[0] = "swty";
tuple2[1] = 200;
tuple2[2] = false;
console.log(tuple2);
console.log(typeof tuple2);
console.log(tuple2[2]);
//# sourceMappingURL=datatypes.js.map