'use strict';

/*
 * PIÑEIRO DAVID
 */

class Disco {

    artista = 'nombre artista';
    nombre = 'nombre album';
    genero = 'genero album';
    pistas = [];


}

class Pista {

    nombre = 'nombre pista';
    duracion = 0;
    numero = 0;
}


let Discos = [Disco];
let Disc = Disco;

//Función cargar pista:

const CargarPista = () => {

    let pistaTemporal = Pista;

    pistaTemporal.nombre = prompt("Ingrese nombre de la pista:");
    pistaTemporal.duracion = prompt("Ingrese duración de la pista:");
    pistaTemporal.numero = prompt("Ingrese número de la pista ")

    return pistaTemporal;
}


// Función Cargar:
const Cargar = () => {
    Disc.pistas = [];

    Disc.artista = prompt("ingrese artista del album");
    Disc.nombre = prompt("Ingrese título del album:");
    Disc.genero = prompt("Ingrese género album:");

    console.log(Disc.artista);
    do {


        Disc.pistas.push(CargarPista());


    } while (confirm("¿Desea agregar mas pistas al album?"));

    Discos.push(Disc);

    
}

// Función Mostrar:
const Mostrar = () => {
    // Variable para ir armando la cadena:

    console.log(Discos);

    let html = '';

    // Cositas:

    // Si modificaste el nombre de la variable para ir armando la cadena, también hacelo acá:
    document.getElementById('info').innerHTML = html; // <--- ahí es acá
};

// Todas las funciones que necesites: