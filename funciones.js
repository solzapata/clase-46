/*-Crear una función calculadora que tome un string por parámetro
la función debe sumar 0, 1 o 2 números, y devolver su suma
los números se ingresan separados por coma
para un string vacío debe devolver 0

-Permitir a la función aceptar una cantidad indefinida de números

-Permitir a la función aceptar otros delimitadores en vez de coma
el delimitador se pasa por parámetro
el delimitador es opcional
el delimitador por defecto es una coma

-Si se pasa un número negativo, debe tirar un error
el error debe indicar qué número negativo se pasó
si hay más de un número negativo, debe indicarlos a todos en el error

-Números mayores a 1000 deben ser ignorados
*/

const calculadora = (str, delimitador = ", ") => {      //el delimitador que pongo por default pero permitiria otros
    const sinString = str.split(`${delimitador}`);
    let sumar = 0;
    let numerosNegativos = [];

    for(let i = 0; i < sinString.length; i++) {
        if (Number(sinString[i]) > 0 &&  Number(sinString[i]) < 1000){       // los numeros menores a 1000 no son ignorados
            sumar += Number(sinString[i]); 
        } else if (Number(sinString[i]) < 0){          // los negativos se suman a un array
            numerosNegativos.push(Number(sinString[i]))
    }}

    if(numerosNegativos.length === 0){                        // si el array de los negativos no tiene nada se muestra la suma
        return sumar;
    } else {                                           // si hay algo en los negativos se muestra el error
        throw new Error(`No se pueden ingresar números negativos. Ingresó: ${numerosNegativos.join(' ')}`)    //el join une a los elementos del array y los separa por espacios en este caso
    }
}


/*-Crear una función que acepte un array 2d, unos índices (de array) correspondientes a coordenadas y un movimiento posible que puede ser: ARRIBA, ABAJO, DERECHA, IZQUIERDA (como string, dentro de un array)

-Debe devolver el valor de la casilla correspondiente a mover las coordenadas actuales en la dirección que se pidió

-Si está en algún borde, debe pasar al otro lado

-Debe aceptar varios movimientos y devolver el resultado final de ese movimiento

-Debe arrojar un error si un movimiento no es válido o si las coordenadas iniciales son inválidas*/






/*Algoritmo de Luhn
Se utiliza para verificar la validez de una tarjeta, pin, etc. Crear una función que devuelva si un número pasa el algoritmo de Luhn o no.

Número de ejemplo: 4012-8888-8888-1881

Se divide el número en dígitos.
*4* 0 *1* 2 *8* 8 *8* 8 *8* 8 *8* 8 *1* 8 *8* 1

Se multiplica por 2 los dígitos que ocupan las posiciones pares contando de derecha a izquierda y empezando por 1, no por 0. 
- 8 0 2 2 16 8 16 8 16 8 16 8 2 8 16 1

Los números mayor a 9 se restan por 9.
8 0 2 2 7 8 7 8 7 8 7 8 2 8 7 1

Se suman todos los números.

90

Si el resto de dividirlo por 10 es 0, el número es válido*/

const algoritmo = (tarjeta) => {
    let numerosSeparados = tarjeta.split();
    /*
    let suma = 0;

    for(let i = 0; i < tarjeta.length; i++){
        if(Number(tarjeta[i]) % 2 == 0){
            Number(tarjeta[i])*2;
        }

        Number(tarjeta[i]) > 9 ? Number(tarjeta[i]) - 9 : false;

        suma += Number(tarjeta[i]);
    }*/

}
