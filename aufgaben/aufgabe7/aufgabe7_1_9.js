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
