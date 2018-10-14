
/**
 * global vs local
 */

var scope = "global";

function checkscope() {
    var scope = "local";
    return scope;
}

console.log(checkscope());      // => "local"

/* en este caso llamamos a la funcion checkscope y por tanto al devolver el valor scope
 y tener esta misma funcion un valor local llamado scope y el return dentro de la funcion el valor de scope
 que se muestra es local */
