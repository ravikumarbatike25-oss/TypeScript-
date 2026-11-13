import { Browser, Environment } from './Enums';

let browsername = "chrome";
switch(browsername){
    case Browser.CHROME:
        console.log("Chrome");
        break;
    case Browser.FIREFOX:
        console.log("Firefox");
        break
    case Browser.EDGE:
        console.log("Edge");
        break;

default:
    console.log("Invalid browser");
    break;
};