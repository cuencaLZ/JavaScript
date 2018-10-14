
/**
 * global vs local
 * function scope and hoisting
 */

function test(o) {
    
    var i = 0;
    
    if (typeof o == "object") {
        
        var j = 0;
    
        for(var k=0; k < 10; k++) {
            console.log(k);             // print numbers 0 through 9
        }
    
        console.log(k);                 // prints 10
    }
    
    console.log(j);                     // j is defined, but may not be initialized
}

o = {};
test(o);
/* aqui tenemos varios console log dentro de diferentes partes del codigo, el primero por ejemplo ira devolviendo
todos los numeros del 0 al 9, pero al llegar este el valor de k es 10 y sale del bucle, al salir del bucle hacemos otro console de k
que como hemos dicho era 10 y para finalizar hacemon un console de j que no a sido modificada y por tanto es 0. */