class User {

    public testing(): void {
        console.log('testing method');
    }
    //private method can be accessed only within the class so convert it to public method
    private coding(): void {
        console.log('coding');
    }
     //public method can be accessed from anywhere
     //private method can be accessed only within the class so convert it to public method
    public doCoding(): void {
        this.coding(); 
    }
 //protected method can be accessed within the class and its subclasses
    protected management(): void {
        console.log('management');
    }
}
let user1 =new User() ;
user1.testing();
//private method can be accessed only within the class so convert it to public method
//user1.Coding();
user1.doCoding();

class Employee extends User 
{
    public working(): void {
        this.testing();
       this.management();
        this.doCoding();
    }
}
let employee1 =new Employee() ;
employee1.working();

//protected method can be accessed within the class and its subclasses
//employee1.management();
