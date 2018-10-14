
/**
 * global vs local
 * function scope and hoisting
 */

 var scope = "global";

function f() {

    var scope;
    console.log(scope);
    scope = "local";
    console.log(scope);
}

f();

console.log(scope);
/* el problema es el mismo de antes, pero de una forma mas visual que la anterior, ahora inicializamos la variable local
antes del primer console log pero este sigue dando undefined, ya que el valor se lo damos despues y por eso el segundo console.log
si nos muestra el valor local */