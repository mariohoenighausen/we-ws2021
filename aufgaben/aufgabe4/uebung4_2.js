class Auto{
    static carCounter = 0;   
    constructor(brand, type){
        this.aid = ++Auto.carCounter;
        this.brand = brand;
        this.type = type; 
        this.ownerCounter = 0;
    }
}
class Person{
    static personCounter = 0;
    constructor(firstName, lastName, dob, car){
        this.pid = ++Person.personCounter;
        this.firstName = firstName;      
        this.lastName = lastName;
        this.dob = dob;
        car.ownerCounter++;
    }
}
const a1 = new Auto("Mercedes","Sports car");
const a2 = new Auto("Ferrari","Super Sports car");

const p1 = new Person("Peter","Griffin","20.10.1969",a1);
const p2 = new Person("Meg","Griffin","04.10.1999",a1);
const p3 = new Person("Lois","Griffin","25.10.1969",a2);

function conflict(auto){
   return auto.ownerCounter != 1;
}