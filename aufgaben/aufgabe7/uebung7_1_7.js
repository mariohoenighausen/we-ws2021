function demethodize(unOp){
    return (x,y)=>{
        return unOp.call(x,y)
    };
}
demethodize(Number.prototype.add)(5,6);
