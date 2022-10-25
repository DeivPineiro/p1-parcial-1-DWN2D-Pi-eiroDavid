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

    while (id < 1 || id > 999 || isNaN(id) == true) {
        id = prompt("Reingrese, solo númerico con rango permitido de: 1>ID>999")
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

    while (seg < 0 || seg > 7200 || isNaN(seg) == true) {
        seg = prompt("Reingrese, solo númerico con rango permitido de: 0>ID>7200 segundos")
    }
    return seg;

}

//Función cargar pista:

const CargarPista = () => {

    const pistaTemporal = new Pista;

    pistaTemporal.nombre = validarVacio(prompt("Ingrese nombre de la pista:"));
    pistaTemporal.duracion = validarDuracion(prompt("Ingrese duración de la pista (Segundos): "));


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

const Mostrar = () => {
    let html;
    let htmlpistas;
    // Usar map

    const imprimirPistas = (lasPistas) => {

        if (lasPistas.duracion < 180) {
            return ("<li> Nombre: " + lasPistas.nombre + "</li>" + "</br>Duración: " + lasPistas.duracion
                + " seg </li></br></br>");
        } else { return ("<li> Nombre: " + lasPistas.nombre + "</li>" + "</br><span style=" + '"color: red;"' + ">Duración: " + lasPistas.duracion + " seg </span></li></br></br>"); }
    }

    

    const duracionDisco = (elDisco) =>{

        let duracionTotal = 0;

        elDisco.pistas.forEach(pista =>{

            duracionTotal = parseInt(duracionTotal) + parseInt(pista.duracion);

        });

        return duracionTotal;

    }

    const imprimirDisco = (elDisco) => {

        return ("Discos cargados: " + Discos.length + "</br></br><li>Disco número: " + elDisco.id + "</li>" + "</br>" + "<li>Artista del album: " + elDisco.artista + "</li>" + "</br>"
            + "<li>Nombre del Album: " + elDisco.nombre + "</li>" + "</br>" + "<li>Genero del album: " + elDisco.genero + "</li>" + "</br>"
            + "</br>Pistas:" + "</br></br><ol>" + "Pistas totales: " + elDisco.pistas.length + "</br></br>" + elDisco.pistas.map(imprimirPistas) + "</br></br>Duración total disco: "+ duracionDisco(elDisco) +"</ol></br>");

    }

    html = Discos.map(imprimirDisco);
    document.getElementById('info').innerHTML = html;



};

