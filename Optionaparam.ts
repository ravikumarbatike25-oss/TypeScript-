
//optional parameter is used to make the parameter optional
//This function is not over loaded function
//this have only one implementation 
function launchBrowser(browser: string, headless?: boolean): boolean {  //declaration and implementation in same line so we can say its not a over loaded function
    if (headless) {
        console.log('run tcs in', browser, 'in', headless);
        return true;
    } else {
        console.log('run tcs in normal mode with:', browser);
        return true;
    }
}

launchBrowser('chrome', true);
//Optional parameter is used to make the parameter optional
function search(productName:string, color: string, brand:string, seller?: string,  price ?:number, ...values:string[] ):void {
  if (price && seller){
    console.log('product is available with price:', price, 'and seller:', seller);

} else {
    console.log('product is not available');
}}

search('iphone', 'black', 'apple', 'amazon', 100000);
search('sumsong', 'blue', 'apple');


//Methid overloading is used to create multiple functions with the same name but different parameters
//Design :Photo+type :signature
function combine(a:number, b:number):number;
function combine(a:number, b:string):string;
function combine(a:string, b:string):string;


//only one function body is allowed to be called based on the parameters
//one implementation is allowed to be called
function combine(a: any,b: any): any {
    return a + b;
}
//this is called as function overloading
console.log(combine(20,20));
console.log(combine( 10, "20"));
console.log(combine("swty", "ravi"));



//example with browser launch
function launchBrowser1(browser: string): void;
function launchBrowser1(browser: string, headless: boolean): void;


//Implementation of the function
//headless is optional parameter
//if headless is not provided, it will be undefined
function launchBrowser1(browser: string,headless?: boolean): void {
    if (headless !== undefined) {
        console.log(`Launching ${browser}, headless: ${headless}`);
    } else {
        console.log(`Launching ${browser}`);
    }
}

launchBrowser1("Chrome");
launchBrowser1("Chrome", true);


