const paisesDisponibles=["Colombia", "Peru", "Ecuador", "Venezuela", "Argentina", "Chile"];
const ciudadesDisponibles=new Array("bogota", "lima", "medellin", "barranquilla", "caracas", "quito");


const cantidadCiudades =ciudadesDisponibles.length;
const cantidadPaises =paisesDisponibles.length;

console.log('En la lista de ciudades hay: '+cantidadCiudades+' ciudades');
console.log('En la lista de paises hay: '+cantidadPaises+' paises');
//Remover el ultimo elemento de la lista

ciudadesDisponibles.pop();

//Remover el primer elemento de la lista
paisesDisponibles.shift();
console.log(`En la lista de ciudades hay: ${ciudadesDisponibles.length} ciudades`);
console.log(`En la lista de paises hay: ${paisesDisponibles.length} paises`);


//Filtro de elementos de una lista

const paisesFiltrados =paisesDisponibles.filter((e)=> e.length>6);
console.log(paisesFiltrados);
//Unificar los elementos de una lista en un string
console.log(ciudadesDisponibles.join(' - '));

//Ordenar los elementos de una lista

console.log(paisesDisponibles.sort());
console.log(paisesDisponibles);


//Conocer el indice de un elemento de una lista
console.log(paisesDisponibles.indexOf('Peru'));

//Unificar dos listas

const paisesYCiudades = paisesDisponibles.concat(ciudadesDisponibles);
console.log(paisesYCiudades);