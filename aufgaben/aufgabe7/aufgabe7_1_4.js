function curry(binOp,x){
    return (y) =>{return binOp(x,y)}
}