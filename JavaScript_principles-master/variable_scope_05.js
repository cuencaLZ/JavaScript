
/**
 * global vs local
 * function scope and hoisting
 */

var scope = "global";

function f() {

    console.log(scope);             // WTF !!
    var scope = "local";
    console.log(scope);             // Prints "local"
}

f();

console.log(scope);                 // Prints "global"
/* al intentar mostrar un console log que de una variable que se crea mas adelane dentro de esta misma funcion (como variable local)
 nos muestra que la variable es undefined aunque este declarada anteriormente como global. Pero si la llamamos fuera de la funcion si se mostrara
 co el valor de la variable global */