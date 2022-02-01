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