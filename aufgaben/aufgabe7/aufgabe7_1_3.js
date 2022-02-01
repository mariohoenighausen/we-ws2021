function applyf(op){
    return (x) => {return (y) => { return op(x,y) }};
}