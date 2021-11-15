// function identity(x){
//     return x;
// }
// function identity_function(x){
//     return (x) => {return x} ;
// }
// function add(num1, num2){
//     return num1 + num2;
// }
// function mul(num1, num2){
//     return num1 * num2;
// }
// function addf(x){
//     return (y) => {return x + y}
// }  
// function applyf(func){
//     return ( x)=> {return ( y) => func(x,y)}
// }

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

// function fib(n, a = BigInt(0), b = BigInt(1)){
//     if( n == 0){
//         return a;
//     }
//     else if(n == 1){
//         return b;
//     }
//     return fib(n - 1,b , a + b)
// }

/*function fib(num)
{
    var num1=BigInt(0);
    var num2=BigInt(1);
    var sum;
    var i=0;
    for (i = 0; i < num; i++) 
    {
        sum=num1+num2;
        num1=num2;
        num2=sum;
    }
    return num2;
}*/

function fib(n, a = 0, b = 1){
    if( n == 0){
        return a;
    }
    else if(n == 1){
        return b;
    }
    return fib(n - 1,b , a + b)
}
function fibPrint(){
    var table = document.getElementById("fibnums");

    let fibs = []
    for(idx = 0; idx < 2000; idx++){
        fibs.push(fib(idx));
    }
    for(jdx = fibs.length; jdx != 0 ; jdx--){
        if(fibs[jdx] == fibs[jdx-1]){
            fibs.pop();
        }
    }
    for(item = 0; item < fibs.length; item++){
        var row = table.insertRow(item);
        var cellOrdinal = row.insertCell(0);
        cellOrdinal.innerHTML = "Fib-Nr."+item;
        var cell = row.insertCell(1);
        cell.innerHTML = fib(item);
        console.log(item);
    }

    
}
// let fibNums = [];
// for(let idx = 0; idx < 2000; idx++){
//     let fibNum = fib(idx);
//     for(jdx in fibNums){
//         if(jdx == fibNum){
//             break;
//         }
//         else{
//             fibNums.push(fibNum);
//         }
//     }
// }
