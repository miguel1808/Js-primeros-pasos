//Operadores de comparacion

const ciudadDestino ="caracas";
const ciudadesDisponibles=new Array("bogota", "lima", "medellin", "barranquilla", "quito");

console.log(`Verific`)

if(ciudadesDisponibles.indexOf(ciudadDestino)>=0){
    console.log("La ciudad esta disponible");

}else{
    console.log("La ciudad no esta disponible");
}