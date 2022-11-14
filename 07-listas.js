//Definicion de una lista con tipo de datos alfanumericos
const ciudadesDisponibles=new Array("bogota", "lima", "medellin", "barranquilla", "caracas", "quito");
//console.log(ciudadesDisponibles);

//Definicion de una lista de forma abreviada

const paisesDisponibles=["Colombia", "Peru", "Ecuador", "Venezuela", "Argentina", "Chile"];
//console.log(paisesDisponibles);
paisesDisponibles.push("Uruguay");
ciudadesDisponibles.push("Montevideo");
paisesDisponibles.unshift("Ecuador")
ciudadesDisponibles.unshift("Quito")
//Mostrando el primer elemento de la lista
console.log(paisesDisponibles[0])
console.log(ciudadesDisponibles[0])


paisesDisponibles.splice(1,2,'Venezuela','Paraguay')
console.log(paisesDisponibles)