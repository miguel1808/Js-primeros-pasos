// Palabra reservada const : Espaciod de memoria que no puede ser reasignado
const valorPasaje=1650;
console.log(valorPasaje);

const nombrePasajero='Leonardo';
const apellidoPasajero='LaCruz';

console.log(nombrePasajero);
console.log(apellidoPasajero);

// Palabra reservada let : Espacios de memoria que puede ser reasignado y pueda cambiar durante la ejecucion del programa

//let nombreCompletoPasajero= nombrePasajero+' '+apellidoPasajero;
//console.log(nombreCompletoPasajero);


// Palabra reservada var : Espacios de memoria que puede ser reasignado y pueda cambiar durante la ejecucion del programa
//El alcance de la variable var es global

var nombreCompletoDelPasajero= nombrePasajero+' '+apellidoPasajero;

{
    let nombreCompletoPasajero= nombrePasajero+' '+apellidoPasajero;
    console.log("Variable con let: "+nombreCompletoPasajero);
    console.log("Variable con var: "+nombreCompletoDelPasajero);
}

console.log("Variable con let: "+nombreCompletoPasajero);
console.log("Variable con var: "+nombreCompletoDelPasajero);