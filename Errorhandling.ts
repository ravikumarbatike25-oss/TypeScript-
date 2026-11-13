//error handling is used to handle the errors in the code
//try catch block is used to handle the errors
//try block is used to execute the code
//catch block is used to handle the errors
//finally block is used to execute the code after the try catch block
//throw keyword is used to throw the errors
function div(a: number, b: number): number {
  if (b === 0) {
    throw new Error("can not be divided by zero"); //Used to throw custom exception
  }
  return a / b;
}

let r1 = div(10, 0);
console.log(r1);

//never is used to return the error
function demo(): never{
  throw new Error("demo error"); 

}

//try catch block is used to handle the errors

function parsingJSON(json: string): any {

    try {
        let obj = JSON.parse(json);
       // console.log("Parsing JSON");  //Used to print the message
        console.log(obj);

    } 
    catch (error) {
        console.log("Error parsing JSON");
    }
    finally {
        console.log("Finally block is executed");
    }
}

parsingJSON('{"name": "John", "age": 30}');
console.log("After parsing JSON");


