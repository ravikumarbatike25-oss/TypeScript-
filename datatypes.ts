let num:number =100;
console.log(num);

let name : string ="Ravi"
console.log(name);

let isenable:boolean =true;
console.log(isenable);

let nullvalue:null =null; //null is a value that is not defined
//let null=null;
console.log(nullvalue);

let undefinedvalue:undefined =undefined; //undefined is a value that is not defined
//let undefined=undefined;
console.log(undefinedvalue);

let memory : bigint =100n;
//console.log(memory+10); //error because bigint is not a number
console.log(memory+10n); //error because bigint is not a number

let arr:number[] =[1,2,3,4,5];
console.log(arr);
// array of strings
let arr2 : string[] =["Ravi","swty", "johney"];
console.log(arr2);

//any type is used to store any data type
let demo :any =100;
console.log(demo);
demo = "Ravi";
console.log(demo);
console.log(typeof demo);
demo = true;
console.log(demo);
demo = [1,2,3,4,5];
console.log(demo);
console.log(typeof demo); //object
demo = {name:"Ravi",age:20};
console.log(demo);
console.log(typeof demo); //object

demo = function(){
    console.log("Hello World");
}
console.log(demo);
console.log(typeof demo); //function

let qa :unknown =100;
console.log(qa);
console.log(typeof qa);
qa = "Ravi";
console.log(qa);
console.log(typeof qa);


// function is used to define a function
function test():void{ //void is used to define a function that does not return anything
    console.log("Hello World");
}
test();

function marks(strName:string, marks:number):void {
    console.log(strName, marks);
}
marks("Ravi", 100);
marks("Swty", 200);//
//marks("Johny", "100"); //error because string is not a number
//marks("Johny", 100, 200); //error because function takes only two arguments


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
let id : string | number | boolean;
 id = "ravi";
 id = 123;
 id = true;
 id = "123";
 console.log(id);
 console.log(typeof id);


 //array 
 let ar :number[]=[10,20,30,40,50];
 console.log(ar);
 console.log(typeof ar);
 console.log(ar[1]);

 //string :This is very useful for data-driven testing
 //Real-time example 2: Data-driven testing
 //Suppose you're testing a login page. You might have different test cases with different usernames and passwords:
 let str :string[] =["ravi","swty","johney"];
 console.log(str);
 console.log(typeof str);
 console.log(str[1]);

 //tuple for fixed length and type of data
 //Interview Question: What is tuple in TypeScript?
 //Answer: Tuple is a fixed length and type of data.
 let tuple :[string,number,boolean] =["ravi",100,true];
 console.log(tuple);
 console.log(typeof tuple);
 console.log(tuple[1]);

let tuple2 :[string,number,boolean] =["ravi",100,true];
console.log(tuple2);
console.log(typeof tuple2);
console.log(tuple2[1]);
tuple2[0] = "swty";
tuple2[1] = 200;
tuple2[2] = false;
console.log(tuple2);
console.log(typeof tuple2);
console.log(tuple2[2]);

//object normal javascript object

// let userData ={
//     name:"Ravi",
//     age:20,
//     email:"ravi@gmail.com",
//     phone:"1234567890",
//     address:"123 Main St, Anytown, USA"
// }
//  console.log(userData);

 //Object with type script 
 //readonly is used to make the property read only
 //readonly prevents a property from being modified after the object is created
  type User = { readonly name:string, age:number, email:string, phone:number, address:string }

 let userdat2 :User ={
   name:"Ravi",
   age:20,
   email:"ravi@gmail.com",
   phone:1234567890,
   address:"123 Main St, Anytown, USA"
 }
 console.log(userdat2);
 console.log(typeof userdat2);
 //userdat2.name="Swty"; //error because name is read only
 userdat2.age=21;
 console.log(userdat2);

 //custom type
 type userdata2 = string | number 

 let status :userdata2 = "active";
 console.log(status);
 console.log(typeof status);
 status = 100; 
 console.log(status);
 console.log(typeof status);


 