/* const { Console } = require("console");

//Tipo variable string
console.log(typeof nombre);

//Tipo variable number
let numero=3000;
console.log(numero);

//Tipo variable objeto
let objeto={
    nombre:"Juan",
    apellido: "Meza",
    telefono: "321345"

}
console.log(objeto);

//Tipo variable boolean
let bandera=false;
console.log(bandera);

//Tipo variable funcion
function mifuncion(){}
console.log(mifuncion);

//Tipo variable simbolo
let simbolo = Symbol("prueba de simbolo");
console.log(simbolo);

//Definicion de clases
class persona{
    constructor(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}
console.log(typeof persona);

//undefined
let x;
console.log(x);

x=undefined;
console.log(typeof x);

//Null = ausencia de valor 
let y= null;
console.log(typeof y)

//arreglos
let autos=['BMW','AUDI','VOLVO','MAZDA'];
console.log(autos);
console.log(typeof autos);
//cadenas 
let z='';
console.log(z);
console.log(typeof z);

z="juan";
console.log(z);
console.log(typeof z);

// concatenacion
const nombre = "yo";
console.log(nombre) 

let nombre= "Pepito";
let apellido= "Perez"
let nombreCompleto= nombre + ' ' + apellido;
console.log(nombreCompleto);

let nombreCompleto1= 'Carlos' + ' '+ 'Gomez';
console.log(nombreCompleto1);

// le anexa a la cadena de texto 
let x = nombre + 2 + 4;
console.log(x);

//cuando encuentra un parentesis hace la operacion y concatena a la cadena de texto 
x=nombre+(2+4);
console.log(x);
// ejecuta la operacion y la anexa a la cadena de texto 
x=2 + 4 + nombre;
console.log(x);

//operaciones arimeticas
let a= 3, b=4;
let z= a+b;
console.log("Resultado de la suma es " + z);

z=a -b;
console.log("El resultado de la resta es " + z);

z=a*b;
console.log("Resultado de la multiplicacion es "+ z)
 
z=a/b;
console.log("Resultado de la division es" + z);

//calculo del modulo
z=a % b;
console.log("Resultado de la operacion modulo es "+ z)

//exponencial

z= a** b;
console.log("Resultado del operador exponente es " + z)


// Precedencia de operaciones matematicas
let a= 3, b=2, c=1, d=4;

let z= a * b + c /  d;
console.log(z);

z= c + a * b/ d;
console.log(z);

z= (c + a) * b / c;
console.log(z);


let a = 3, b=2, c="3";

/*let z= a == c // se revisa el valor sin importar el tipo
console.log(z);

z= a === c;//revisa los valores pero tambien el tipo
console.log(z); 

let z = a != c;// revisa el valor sin importar el tipo
console.log(z);

z= a!== c;// revisa valores validando el tipo 
console.log(z);

//operadores relaciones con expresiones booleanas

let z = a < b;
console.log(z);

z = a <= b;
console.log(z);

z = a > b ;
console.log(z);

z = a >= b;
console.log(z);


let a = 9;
  
if(a % 2==0){
    console.log("es un numero par");
    console.log("Numero no divisible")
}
else{
    console.log("es un numero impar")
}


let edad= 18, adulto = 18;

if(edad >= adulto ){
    console.log();

}


let a= 7;
let valmin = 0, valmax = 18;

if(a >= valmin & a <= valmax ){
    console.log("esta dentro del rango");
}
else{
    console.log("esta fuera del rango")
}

let vacaciones = false, descanso= true;

if(vacaciones || descanso ){
 console.log("padre puede asistir al evento ")
}
else{
    console.log("Padre no puede asistir al evento ");
}

// operador ternario

let resultado = (1 > 2)? "Verdadero" : "Falso";
console.log(resultado);

let numero= 50;
let result= (numero % 2 == 0)? "Numero par" : "Numero impar";
console.log(result);*/

// String to number
//let minumero = "18";

/*let edad= Number(minumero);
console.log(typeof edad);

if (edad >= 18){
    console.log("puede votar");
}
else{
    console.log("No puede votar")
}

let edad1= 34;
 let votacion =(edad1 >= 18)? "puede votar" : "no puede votar";
 console.log(votacion)

 if(isNaN(minumero)){
     console.log("No es un numero");
 }
 else {
     console.log("Si es un numero")
 }


 let edad= Number(minumero);

 if(isNaN(edad)){
     console.log("no es un numero")
 }
 else{
     if(edad >= 18){
         console.log("Es mayor")
     }
     else{
         console.log("es menor");
     }
 }


 let numero= 2;

 if(numero == 1){
     console.log("el numero es uno");
 }
 else if(numero==2){
     console.log("Numero dos");
 }
 else if(numero==3){
     console.log("Numero tres");
 }
 else{
     console.log("Numero desconocido");
 }*/


 