/*Crear una variable de cada tipo y hacerle un console.log a cada una en la terminal.*/
var variableTipoVar ="Primera Variable";
let variableTipoLet = "Segunda Variable";
const variableTipoConst= "Hola";

console.log(variableTipoConst);
console.log(variableTipoVar);
console.log(variableTipoLet);


/*Crear 2 variables y concatenarlas con interpolación de texto.*/

let saludo = "Hola Mundo";
let pregunta = "¿Como estan?";

console.log(`${saludo}, Saludando desde la consola, ${pregunta}`);


/*
Crear 2 variables tipo Number y realizar:
    Una operación aritmética.
    2 asignaciones + una operación aritmética.
    1 comparación.
*/

//Creacion de variables tipo number
let numeroUno=50;
let numeroDos=90;

//Primera Operacion aritmetica
let suma = numeroUno + numeroDos;
console.log(suma);

//Asignacion de nuevos valores;
numeroUno = 150;
numeroDos = 300;

//Segunda Operacion aritmetica
let multiplicacion = numeroUno * numeroDos;
console.log(multiplicacion);


//Comparación entre variables

if(numeroUno > numeroDos){
    console.log(`El numero uno con valor ${numeroUno} \n es mayor al numero dos con valor ${numeroDos}`)
}else{
    console.log(`El numero dos con valor ${numeroDos} \n es mayor al numero uno con valor ${numeroUno}`)
}
