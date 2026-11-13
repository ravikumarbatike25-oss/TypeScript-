class car {
    start(){
        console.log("Car started");
    };
    stop(){
        console.log("Car stopped");
    };

    refuel()
    {
        console.log("Car refueled");
    }
};

class bmw extends car {
    override start(){
        console.log("BMW started");
    };
    Autoparking(){
        console.log("BMW is parking itself");
    };
};

// let bmwCar = new bmw();
// bmwCar.start();
// bmwCar.Autoparking();
// bmwCar.refuel();
// bmwCar.stop();

//Top casting
//IS-A Relationship
//Here we are creating an object of the bmw class and assigning it to the car1 variable
//This is a valid assignment because bmw is a subclass of car and car is a superclass of bmw
let car1 =new bmw();
car1.start();
car1.Autoparking();
car1.refuel();
car1.stop();

//Down casting is not allowed in typescript
// let bmw2 = new car(); 
// bmw2.start();
// bmw2.refuel();
// bmw2.stop();
// bmw2.Autoparking();//This is not allowed because bmw2 is an object of the car class and car class does not have the Autoparking method


