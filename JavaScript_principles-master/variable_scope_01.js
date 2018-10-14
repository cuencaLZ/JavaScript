
/**
 * global vs local
 */

var scope = "global";

function checkscope() {
    var scope = "tumadre";
    return scope;
}

console.log(checkscope());      // => "local"
