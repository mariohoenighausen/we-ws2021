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
