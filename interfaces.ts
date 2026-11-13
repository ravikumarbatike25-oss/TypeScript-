// interface: prototype for the objects and classes
// cannot create the object of Interface
// only method declaration: no method body, no business logic

// Interface with objects: define the shape / blueprint of the object

interface User { // interface name
    name: string; // property declaration
    age: number;
    salary?: number; // optional property
    readonly compName: string; // readonly property
    city: string; // property declaration

    coding(): void; // method declaration
    calcSal(): number; // method declaration
}

let u1: User = { 
    name: 'Gaurav',
    age: 30,
    compName: 'IBM',
    salary: 12.33,
    city: 'LA',

    coding(): void { // method implementation
        console.log(`${this.name} is coding`);
    },

    calcSal(): number { // method implementation
        return 100;
    }
};
console.log(u1); // object print
u1.coding(); // method call
u1.calcSal(); // method call