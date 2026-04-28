import { Curso } from "../core/models/home.models"

export let LISTA_CURSOS: Curso[] = [
    {
        id: 1,
        titulo: 'Curso de Programación Web',
        categoria: 'programacion',
        imagen: 'assets/img/ProgramacionWeb.png',
        colorClase: 'color-blue',
        botonClase: 'blue'
    },
    {
        id: 2,
        titulo: 'Diseño Gráfico Creativo',
        categoria: 'diseno',
        imagen: 'assets/img/CursoDiseno.png',
        colorClase: 'color-pink',
        botonClase: 'pink'
    },
    {
        id: 3,
        titulo: 'Marketing Digital Básico',
        categoria: 'finanzas',
        imagen: 'assets/img/CursoMarketing.png',
        colorClase: 'color-yellow',
        botonClase: 'blue'
    }
]