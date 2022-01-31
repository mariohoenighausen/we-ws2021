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