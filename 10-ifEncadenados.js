const ciudadDestino ="bogota";
const ciudadesDisponibles=new Array("bogota", "lima", "medellin", "barranquilla", "quito");
let edadPasajero = 17;
let estaAcompañado=false;
console.log(`Verificando pasajes para ${ciudadDestino}`);

if(edadPasajero>=18 || estaAcompañado){
    if(ciudadesDisponibles.indexOf(ciudadDestino)> -1){
        console.log("La ciudad esta disponible");
    }else{
        console.log("La ciudad no esta disponible");
    }
}else{
    if(edadPasajero>=16 && ciudadDestino=="lima"){ 
        console.log("La ciudad esta disponible");
    }else{
        console.log("Pasajero no cumple con los requisitos");
    }
}