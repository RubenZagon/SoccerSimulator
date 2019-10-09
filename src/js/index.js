/**
 * OBJETIVO: Simulador de partidos de fútbol y sus resultados.
 *
 *  - Elegir dos equipos aleatorios de una lista
 *  - Asignar resultados al partido disputado
 *  - Requisitos: Asegurar equipos sean diferentes
 */


const marcador = document.querySelector('.marcador')
const boton = document.querySelector('.btnPartido')

const TEAMS = ['Real Madrid', 'Barcelona', 'Tenerife', 'Gran Canaria']


class Equipo {
    constructor(t = "", p = 0) {
        this.team = t
        this.points = p
    }

    getTeam() {
        return Equipo.team
    }

    getPoints() {
        return Equipo.points
    }

}

const getRandomNumber = (numb) => {
    return Math.floor(Math.random() * numb);
}

const generateTeams = () => {
    let equipos = []

    for (i = 0; i < TEAMS.length; i++) {

        //Necesito generar un número aleatorio con lo ancho del array de equipos, luego en cada pasada del for, ir añadiendo ese equipo con una puntuación random y quitandolo del array - Tal vez utilizar .filter

        equipo = new Equipo(TEAMS[getRandomNumber(TEAMS.length)], getRandomNumber(5))
        //        if (equipos != 'equipos')  //Aqui poner algo para buscar que no esté ya en el array de dentro

        equipos.push(equipo)
    }
    return equipos
}

let Equipazos = generateTeams()

/*
console.table(generateTeams())
console.log(Equipazos[0].team)
*/

const setScoreboard = (array) => {
    console.log('apretar boton')
    return array[0].team + "  " + array[0].points + "  -  " + array[1].team + "  " + array[1].points
}

boton.addEventListener('click', marcador.innerHTML = setScoreboard(Equipazos));