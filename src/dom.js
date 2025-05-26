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
const boton_enviar = document.querySelector(".boton-enviar");
const progressbar = document.querySelector(".progressbar");

// manejar preguntas del quizz
let preguntasActuales = [];
let indicePreguntaActual = 0;
let puntaje = 0;
let respuestaSeleccionada = null;
let categoriaSeleccionada = null;

// ocultar quizz al terminar
quiz.style.display = "none";
resultado.style.display = "none";

// Mostrar pregunta actual
function mostrarPregunta() {
    const pregunta = preguntasActuales[indicePreguntaActual];
    texto_pregunta.textContent = pregunta.pregunta;
    const opcionesDOM = opciones.querySelectorAll('.opcion');
    opcionesDOM.forEach((opcionDOM, i) => {
        opcionDOM.querySelector('.texto-respuesta').textContent = pregunta.opciones[i];
        opcionDOM.classList.remove('seleccionada');
        opcionDOM.querySelectorAll('.icono-feedback').forEach(icono => icono.style.display = 'none');
    });
    numero_pregunta_actual.textContent = indicePreguntaActual + 1;
    numero_total_pregunta.textContent = preguntasActuales.length;
    progressbar.style.width = `${((indicePreguntaActual + 1) / preguntasActuales.length) * 100}%`;
    respuestaSeleccionada = null;
    document.querySelector('.mensaje-feedback').textContent = '';
}

// seleccionar cate
lista_categorias.addEventListener('click', (e) => {
    const categoriaDiv = e.target.closest('.categoria');
    if (!categoriaDiv) return;
    categoriaSeleccionada = categoriaDiv.dataset.categoria;


    const categoriaObj = quizPreguntas.find(cat => cat.categoria.toLowerCase() === categoriaSeleccionada);
    preguntasActuales = categoriaObj.preguntas;
    indicePreguntaActual = 0;
    puntaje = 0;
    bienvenida.classList.remove('active');
    quiz.style.display = 'block';
    resultado.style.display = 'none';
    mostrarPregunta();
});
