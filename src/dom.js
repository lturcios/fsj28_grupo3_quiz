import { quizPreguntas } from "./preguntas";

const body = document.body;
const bienvenida = document.querySelector(".bienvenida");
const lista_categorias = document.querySelector(".lista-categorias");
const quiz = document.querySelector(".quiz");
const resultado = document.querySelector(".resultado");

const numero_pregunta_actual = document.getElementById("numero-pregunta-actual");
const numero_total_pregunta = document.getElementById("numero-pregunta-total");
const texto_pregunta = document.getElementById("texto-pregunta");
const opciones = document.querySelector(".opciones");
const opcion = document.querySelector(".opcion");
const boton_enviar = document.querySelector(".boton-enviar");
const progressbar = document.querySelector(".progressbar");

let quizActual = null;
let indicePreguntaActual = 0;
let puntaje = 0;
let respuestaSeleccionada = null;

// xxxxxxxx
let quizIniciado = false;


function cargarCategorias(){
    lista_categorias.innerHTML = '';
    quizPreguntas.forEach( category => {
        const categoria = document.querySelector(".categoria");
        
    })
}
