
/**
 * global vs local
 * nested scopes
 */

var scope = "global scope";

function checkscope() {
    
    var scope = "local scope";
    
    function nested() {
        
        var scope = "nested scope";
        return scope;
    }

    return nested();
}

console.log(checkscope());              // => "nested scope"
console.log(scope);                     // => "global scope"
/* cuando llama a la funcion esta haciendo que esta devueva lo que tiene su funcion y por tanto
se muestra el return de la funcion nested. El segundo console.log no llama a ninguna funcion y por tanto no entra dentro de ninguna
lo que hace que devuelva directamente el valor global */
