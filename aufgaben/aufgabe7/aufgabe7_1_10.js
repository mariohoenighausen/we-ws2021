function composeb(binOp1, binOp2){
    return (x,y,z) => {return binOp2(binOp1(x,y),z)} 
  }
  console.log(composeb(add, mul)(2, 3, 5));
  console.assert(composb(add,mul)(2,3,5) === 25,"Is not equal");