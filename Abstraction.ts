// Abstract class by using this we can achieve 0-100% abstraction
// Cannot create object of abstract class
// Can have abstract methods (without body)
// Can have non-abstract methods (with body)
// Combination of abstract and non-abstract methods = Partial Abstraction
//its not support multiple inheritance
abstract class Page {

    constructor(){
        console.log('Page constructor');
    }
    abstract title(): void;
    abstract url(): void;

    pageLoading(): void {
        console.log('Page is loaded in 20 secs');
    }

    footers(): void {
        console.log('Display footer links');
    }
}

class LoginPage extends Page {

    constructor(){
        super(); // call the parent class constructor
        console.log('LoginPage constructor');
    }

    override title(): void {
        console.log('Login Page');
    }

    override url(): void {
        console.log('https://example.com/login');
    }

    pageLoading(): void {
        console.log('Page is loaded in 5 secs');
    }

    checkheader(): void {
        console.log('Login Page is loaded in 10 secs and check header is displayed');
    }
}

let lgn: LoginPage = new LoginPage();
lgn.title();
lgn.url();
lgn.pageLoading();
lgn.checkheader();
lgn.footers();
