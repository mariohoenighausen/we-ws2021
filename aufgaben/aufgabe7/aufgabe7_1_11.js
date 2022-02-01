function once(op) {
    var counter = 0;

    function inner() {

        counter++
        if (counter > 1) {
            throw "Has been invoked twice!";
        }
        return (...x) => op(...x);
    }

    return inner();

}
var add_once = once(add);