/**
 * OBJETIVO: Simulador de partidos de fútbol y sus resultados.
 *
 *  - Elegir dos equipos aleatorios de una lista
 *  - Asignar resultados al partido disputado
 *  - Requisitos: Asegurar equipos sean diferentes
 */


const marcador = document.querySelector('.marcador')
const boton =    document.querySelector('.btnPartido')

const TEAMS = ['Real Madrid', 'Barcelona', 'Tenerife', 'Gran Canaria']


class Equipo {
    constructor(t = "", p = 0) {
        this.team = t
        this.points = p
    }

    generateTeamAndPoints () {
        this.team = Math.floor(Math.random() * numb)
    }
}

const getRandomNumber = (numb) => {
    return Math.floor(Math.random() * numb);
}

let indice = TEAMS.length

const generateTeams = () => {
    let equipos = []

    for (i = 0; i < indice; i++) {
        equipo = new Equipo(TEAMS[getRandomNumber(indice)], getRandomNumber(5))
        equipos.push(equipo)
    }
    return equipos
}


const setScoreboard = () => {
    let Equipazos = generateTeams(),
        Equipo1 = Equipazos[0].team + "  " + Equipazos[0].points,
        Equipo2 = Equipazos[1].team + "  " + Equipazos[1].points

    if (Equipazos[0].team == Equipazos[1].team) {
        marcador.textContent = 'Pulsa otra vez'
    } else {
        marcador.textContent = Equipo1 + "  -  " + Equipo2
    }


}

boton.addEventListener('click', setScoreboard);
