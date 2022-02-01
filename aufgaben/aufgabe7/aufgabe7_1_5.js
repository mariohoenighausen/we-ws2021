function inc(x){
    return curry((num1,num2)=>{return num1 + num2},x)(1);
}