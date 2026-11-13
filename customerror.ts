class elementNotFoundError extends Error {
    constructor(message: string) { // Used to create a new instance of the class
        super(message); // Used to call the constructor of the parent class
    }
}

class browserNotFoundError extends Error { 
    constructor(message: string) { // Used to create a new instance of the class
        super(message); // Used to call the constructor of the parent class
    }
}

class environmentNotFoundError extends Error {
    constructor(message: string) {
        super(message);
    }
}

let  browser="safari";
  switch(browser){
    case "chrome":
        console.log("chrome browser is found");
        break;
    case "firefox":
        console.log("firefox browser is found");
        break;
    case "edge":
        console.log("edge browser is found");
        break;
    default:
        throw new browserNotFoundError("browser not found"); // Here we used custom error class

  }
  console.log("Enter url");




  