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

//Funcion validarVacio

const validarVacio = (v) => {

    while (v == "" || v == 0) {
        v = prompt("No se aceptan campos vacios ni 0, reingrese")
    }

    return v;

}

//Función validar ID
const ValidarId = (id) => {

    let cont = 0;

    while (id < 1 || id > 999) {
        id = prompt("Reingrese, rango permitido 1>ID>999")
    }

    Discos.forEach(Disco => {

        if (Disco.id == id) {
            cont++;
        }

    });

    if (cont > 0) {
        return false;
    } else { return true; }
}

//Función validar duracion

const validarDuracion = (seg) => {

    while (seg < 0 || seg > 7200) {
        seg = prompt("Reingrese, rango permitido 0>ID>7200 segundos")
    }
    return seg;

}

//Función cargar pista:

const CargarPista = () => {

    const pistaTemporal = new Pista;

    pistaTemporal.nombre = validarVacio(prompt("Ingrese nombre de la pista:"));
    pistaTemporal.duracion = validarDuracion(validarVacio(prompt("Ingrese duración de la pista (Segundos): ")));


    return pistaTemporal;
}

// Función Cargar:

const Cargar = () => {

    let i = 0;
    const Disc = new Disco;
    Disc.pistas = [];

    i = validarVacio(prompt("Ingrese codigo de identificación del album"));

    while (ValidarId(i) == false) {
        i = validarVacio(prompt("Id en uso, reingrese"));
    }

    Disc.id = i;
    Disc.artista = validarVacio(prompt("ingrese artista del album"));
    Disc.nombre = validarVacio(prompt("Ingrese título del album:"));
    Disc.genero = validarVacio(prompt("Ingrese género album:"));

    console.log(Disc.artista);

    do {

        Disc.pistas.push(CargarPista());

    } while (confirm("¿Desea agregar mas pistas al album?"));

    console.log(Disc.nombre);
    Discos.push(Disc);
    console.log(Discos);
    return;

}

const Mostrar = () => {
    let html;
    let htmlpistas;
// Usar map

const imprimirPistas = (lasPistas) => {

    return ("<li> Nombre: " + lasPistas.nombre + "</li>" + "</br>Duración: " + lasPistas.duracion
    + " seg </li></br></br>");

}

const imprimirDisco = (elDisco) => {

    return ("</br></br><li>Disco número: " + elDisco.id +"</li>" + "</br>" + "<li>Artista del album: "+ elDisco.artista+ "</li>" + "</br>"
    + "<li>Nombre del Album: " + elDisco.nombre +"</li>" + "</br>" + "<li>Genero del album: "+ elDisco.genero+ "</li>" +"</br>"
    + "</br>Pistas: "+ "</br></br><ol>"+ elDisco.pistas.map(imprimirPistas) + "</ol></br>");



}

    html = Discos.map(imprimirDisco);
    document.getElementById('info').innerHTML = html;
        


        



     };


    // Cositas:

    // Si modificaste el nombre de la variable para ir armando la cadena, también hacelo acá:
     // <--- ahí es acá

