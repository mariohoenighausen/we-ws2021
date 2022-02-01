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