//constractor with parameters
//parameters are used to pass the data to the constractor
//parameters are used to initialize the variables

class LoginPage {

    readonly pageUrl: string;
    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.pageUrl = "https://example.com/login";
        this.username = username;
        this.password = password;
    }

    login() {
        console.log(`Opening ${this.pageUrl}`);
        console.log(`Entering username: ${this.username}`);
        console.log(`Entering password: ${this.password}`);
        console.log("Clicking Login");
    }
}

let signin = new LoginPage("admin", "password");
signin.login();


//constractor without parameters
class Browser {
    browserName: string;
    constructor() {
        this.browserName = "Chrome";
    }
}
const browser = new Browser();
console.log(browser.browserName);
