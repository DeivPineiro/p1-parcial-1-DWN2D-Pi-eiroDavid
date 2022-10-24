'use strict';

/*
 * PIÑEIRO DAVID
 */

class Disco {
    
    id = 0
    artista = 'nombre artista';
    nombre = 'nombre album';
    genero = 'genero album';
    pistas = [];


}

class Pista {

    nombre = 'nombre pista';
    duracion = 0;

}
let Discos = [];

//Función validar ID
const ValidarId = (id) => {

    let cont = 0;
    Discos.forEach(Disco => {

        if (Disco.id == id) {
            cont++;
        }

    });

    if (cont > 0) {
        return false;
    } else { return true; }
}

//Función cargar pista:

const CargarPista = () => {
   
    const pistaTemporal = new Pista;

    pistaTemporal.nombre = prompt("Ingrese nombre de la pista:");
    pistaTemporal.duracion = prompt("Ingrese duración de la pista:");
    pistaTemporal.numero = prompt("Ingrese número de la pista ");

    return pistaTemporal;
}

// Función Cargar:

const Cargar = () => {

    let i = 0;
    const Disc = new Disco;
    Disc.pistas = [];

    i = prompt("Ingrese codigo de identificación del album");

    while (ValidarId(i) == false) {
        i = prompt("Id en uso, reingrese");
    }

    Disc.id = i;
    Disc.artista = prompt("ingrese artista del album");
    Disc.nombre = prompt("Ingrese título del album:");
    Disc.genero = prompt("Ingrese género album:");

    console.log(Disc.artista);

    do {

        Disc.pistas.push(CargarPista());

    } while (confirm("¿Desea agregar mas pistas al album?"));

    console.log(Disc.nombre);
    Discos.push(Disc);
    console.log(Discos);
    return;

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