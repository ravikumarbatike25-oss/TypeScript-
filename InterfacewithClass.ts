//Interface with multiple classes
//Interface with multiple classes: define the shape / blueprint of the classes

//100% abstraction
//No implementation
//Only method declaration
//No method body
//No business logic
//Only method signature
//Only method parameters
//Only method return type
//Only method access modifier
//Only method visibility
interface USMedical {
    physio(): void;
    cardio(): void;
    emergency(): void;
}

interface UKMedical {
    eNT(): void;
    oncology(): void;
    emergency(): void;
}

interface IndianMedical {
    pedia(): void;
    dental(): void;
    emergency(): void;
}

class FortisHospital implements USMedical, UKMedical, IndianMedical {
    //common method implementation
    emergency(): void {
        console.log('FH -- emergency');
    }
    //individual method implementation
    physio(): void {
        console.log('FH -- physio');
    }
    cardio(): void {
        console.log('FH -- cardio');
    }
    eNT(): void {
        console.log('FH -- eNT');
    }
    oncology(): void {
        console.log('FH -- oncology');
    }
    pedia(): void {
        console.log('FH -- pedia');
    }
    dental(): void {
        console.log('FH -- dental');
    }
    //induvidual method implementation
    medicine():void{
        console.log('FH -- medicine');
    }
};
let fh =new FortisHospital();
fh.cardio();
fh.emergency();
fh.medicine();
fh.oncology();
fh.pedia();
fh.dental();
fh.physio();
fh.eNT();
fh.dental();
fh.physio();
fh.eNT();
fh.dental();
fh.physio();

//Top casting
let US1: USMedical = new FortisHospital();
US1.cardio();
US1.emergency();
US1.physio();
