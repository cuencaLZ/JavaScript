
/**
 * global vs local
 * var to declare local variables
 */

scope = "global";

function checkscope2() {
    
    scope = "local";
    myscope = "local";

    return [scope, myscope];
}

console.log(checkscope2());

console.log(scope);
console.log(myscope);           

/* Al no poner var al crear los valores dentro de la funcion estas no tienen un alcance especifico,
cuando llamos a las variables fuera de la funcion su valor sigue siendo "local" */
