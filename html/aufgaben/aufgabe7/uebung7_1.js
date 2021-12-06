function identity_function(x){
    return () => {return x};
}
function addf(x){
    return (y) => {return x + y}; 
}
function applyf(op){
    return (x) => {return (y) => { return op(x,y) }};
}
function curry(binOp,x){
    return (y) =>{return binOp(x,y)}
}
function inc(x){
    return curry((num1,num2)=>{return num1 + num2},x)(1);
}
function inc(x){
    return addf(x)(1);
}
function inc(x){
    return applyf((x,num2)=>{return x + num2},(1));
}

function add(x,y){
    return x+y;
}

function mul(x,y){
    return x*y;
}
function methodize(binOp){
    return function(x){return binOp(this.valueOf(),x)};
}

Number.prototype.add = methodize(add);
Number.prototype.mul = methodize(mul);

function demethodize(unOp){
    return (x,y)=>{
        return unOp.call(x,y)
    };
}
demethodize(Number.prototype.add)(5,6);

function twice(binOp){
    return (x) => binOp(x,x);
  }

function double(x){
    return x*2;
  }
  function square(x){
      return x**2;
  }
  function composeu(unOp1,unOp2){
    return (x) =>{return unOp2(unOp1(x))}
  }
  console.assert(composeu(double,square)(3) === 36,"Is not equal");

function composeb(binOp1, binOp2){
    return (x,y,z) => {return binOp2(binOp1(x,y),z)} 
  }
  console.log(composeb(add, mul)(2, 3, 5));
  console.assert(composb(add,mul)(2,3,5) === 25,"Is not equal");

function once(op) {
    var counter = 0;

    function inner() {

        counter++
        if (counter > 1) {
            throw "Has been invoked twice!";
        }
        return (...x) => op(...x);
    }

    return inner();

}
var add_once = once(add);


function counterf(x){
    var idx = x;
    
    return{
        inc: function(){
            return ++idx;
        },
        dec: function(){
            return --idx;
        }
    }
}

function revocable(fnc){
    var lock = 0;
    return{
        invoke:function(val){
            if(lock > 0){
                throw "Can't be invoked"
            }
            else{
                fnc(val);
            }
            
        },
        revoke:function(){
            lock = 1;
        }
    }
}

function vector(){
    var arr = [];
    return{
        append: function(val){
            arr.push(val);
        },
        store: function(idx,val){
            arr[idx] = val;
        },
        get: function(idx){
            return arr[idx];
        }
    }
}
const my_vector = vector();
my_vector.append(7);
my_vector.store(1, 8);
console.log(my_vector.get(0)) // 7
console.log(my_vector.get(1)) // 8