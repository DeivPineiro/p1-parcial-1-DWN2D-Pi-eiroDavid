'use strict';

/*
 * PIÑEIRO DAVID
 */
//Se crean las clases
class Disco {

    id = 0;
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
        v = prompt("No se aceptan campos vacios ni 0, reingrese");
    }

    return v;

}

//Función validar ID

const ValidarId = (id) => {

    let cont = [];
    //cont[0]= 0;
    //cont[1]= "";
    while (id < 1 || id > 999 || isNaN(id) == true) {
        id = prompt("Reingrese, solo númerico con rango permitido de: 1>ID>999");
    }
    cont[1]= id;
    Discos.forEach(Disco => {

        if (Disco.id == id) {
            cont[0]++;
        }

    });

    return cont;

}

//Función validar duracion

const validarDuracion = (seg) => {

    while (seg < 0 || seg > 7200 || isNaN(seg) == true) {
        seg = prompt("Reingrese, solo númerico con rango permitido de: 0>ID>7200 segundos");
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

    let i = [];
    const Disc = new Disco;
    Disc.pistas = [];

    i[1] = validarVacio(prompt("Ingrese codigo de identificación del album"));

    i = ValidarId(i[1]);

    while (i[0] > 0) {
        i[1] = validarVacio(prompt("Id en uso, reingrese"));
    }

    Disc.id = i[1];
    Disc.artista = validarVacio(prompt("ingrese artista del album"));
    Disc.nombre = validarVacio(prompt("Ingrese título del album:"));
    Disc.genero = prompt("Ingrese género album:");

    do {

        Disc.pistas.push(CargarPista());

    } while (confirm("¿Desea agregar mas pistas al album?"));

    Discos.push(Disc);
    return;
}

//Función duración del disco

const duracionDisco = (elDisco) => {

    let duracionTotal = 0;

    elDisco.pistas.forEach(pista => {

        duracionTotal = parseInt(duracionTotal) + parseInt(pista.duracion);

    });

    return duracionTotal;

}

//Función disco con pista de mayor duración

const duracionAlta = (elDisco) => {

    let masAlta = Pista;
    masAlta.duracion = 0;


    elDisco.pistas.forEach(pista => {

        if (pista.duracion > masAlta.duracion) {
            masAlta.duracion = pista.duracion;
            masAlta.nombre = pista.nombre;
        }


    });

    return (masAlta.nombre + "</br>Con una duración de: " + masAlta.duracion + " seg");

}

//disco con mayor duración

const duracionAltaDisco = (Discos) => {

    let AltoDisco = Disco;
    let mayor = 0;


    Discos.forEach(disco => {


        disco.pistas.forEach(pista => {

            if (pista.duracion > mayor) {
                mayor = pista.duracion;
                AltoDisco = disco;

            }


        });

    });

    return AltoDisco;


}

// Disco con mayor duración

const DiscoLargo = (Discos) => {

    let mayorDisco = "";
    let maxDur = 0;
    Discos.forEach(disco => {

        if (maxDur < duracionDisco(disco)) {
            maxDur = duracionDisco(disco);
            mayorDisco = disco.nombre;
        }

    });

    return ("<span style=" + '"color: red;"' + "></br>El album de mayor duración es: " + mayorDisco + "</br>Con una duración de: " + maxDur + " seg </span>");

}

// Muestra las pistas del disco

const imprimirPistas = (lasPistas) => {

    if (lasPistas.duracion < 180) {
        return ("<li> Nombre: " + lasPistas.nombre + "</li>" + "</br>Duración: " + lasPistas.duracion
            + " seg </li></br></br>");
    } else { return ("<li> Nombre: " + lasPistas.nombre + "</li>" + "</br><span style=" + '"color: red;"' + ">Duración: " + lasPistas.duracion + " seg </span></li></br></br>"); }
}

//Muestra el disco

const imprimirDisco = (elDisco) => {

    return ("</br></br><li>Disco número: " + elDisco.id + "</li>" + "</br>" + "<li>Artista del album: " + elDisco.artista + "</li>" + "</br>"
        + "<li>Nombre del album: " + elDisco.nombre + "</li>" + "</br>" + "<li>Genero del album: " + elDisco.genero + "</li>" + "</br>"
        + "</br></br><ol>" + "Pistas totales: " + elDisco.pistas.length + "</br></br>" + elDisco.pistas.map(imprimirPistas) + "</br></br>Duración total disco: " + duracionDisco(elDisco) + "</br>Promedio duración temas: " + duracionDisco(elDisco) / elDisco.pistas.length + " seg" + "</br>Tema con mayor duración: " + duracionAlta(elDisco) + "</ol></br></br>");

}

//Boton mostrar

const Mostrar = () => {
    let html;
    let htmlpistas;
    let elDiscoXl = Disco;

    elDiscoXl = duracionAltaDisco(Discos);

    html = Discos.map(imprimirDisco);

    html = ("<span style=" + '"color: green;"' + ">Discos cargados: " + Discos.length + "</span>" + html + "</br></br>" + "El disco con el tema mas largo es: " + elDiscoXl.nombre + "</br>con el tema: " + duracionAlta(elDiscoXl) + "</br>" + DiscoLargo(Discos));

    document.getElementById('info').innerHTML = html;

};

//Boton busqueda de disco por id
const MostrarDisco = () => {

    //se valida ID a buscar y de encontrar id retorna el disco
    const ValidarIdBusqueda = (id) => {

        let cont = 0;

        while (id < 1 || id > 999 || isNaN(id) == true) {
            id = prompt("Reingrese, solo númerico con rango permitido de: 1>ID>999");
        }

        Discos.forEach(Disco => {

            if (Disco.id == id) {
                cont++;
            }

        });

        if (cont > 0) { return false; } else { return true; }

    }

    let idB = 0;
    let discoEncontrado = Disco;
    
    idB = validarVacio(prompt("Ingrese codigo de identificación del album a buscar"));

    if (ValidarIdBusqueda(idB) == false) {
        
        alert("¡Disco encontrado!");

        Discos.forEach(disco => {

            if (disco.id == idB) {
                discoEncontrado.id= disco.id;
                discoEncontrado.nombre = disco.nombre;
                discoEncontrado.artista = disco.artista;
                discoEncontrado.genero = disco.genero;
                discoEncontrado.pistas = disco.pistas;

            }

        });

    } else { alert("No se encontro disco"); }

    let html2 = imprimirDisco(discoEncontrado);
    document.getElementById('info').innerHTML = html2;

}
