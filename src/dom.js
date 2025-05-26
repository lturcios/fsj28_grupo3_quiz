import { quizPreguntas } from "./preguntas.js";

document.addEventListener("DOMContentLoaded", () => {
  // =============================================
  // SELECTORES DEL DOM - Elementos de la interfaz
  // ==========================================
  const bienvenida = document.querySelector(".bienvenida");
  const listaCategorias = document.querySelector(".lista-categorias");
  const quiz = document.querySelector(".quiz");
  const resultado = document.querySelector(".resultado");
  const numeroPreguntaActual = document.getElementById(
    "numero-pregunta-actual"
  );
  const numeroPreguntaTotal = document.getElementById("numero-pregunta-total");
  const textoPregunta = document.getElementById("texto-pregunta");
  const opcionesContainer = document.querySelector(".opciones");
  const botonEnviar = document.querySelector(".boton-enviar");
  const progressbar = document.querySelector(".progressbar");
  const mensajeFeedback = document.querySelector(".mensaje-feedback");
  const mensajeFinal = document.getElementById("mensaje-final");
  const botonReiniciar = document.querySelector(".boton-reiniciar");

  // variables deestado = Datos que cambiaran durante la ejecucion
  let preguntasActuales = [];
  let indicePreguntaActual = 0;
  let puntaje = 0;
  let respuestaSeleccionada = null;

  quiz.style.display = "none";
  resultado.style.display = "none";

  // (Estado inicial de la app)funcion para mostrar una pregunta
  function mostrarPregunta() {
    const pregunta = preguntasActuales[indicePreguntaActual];
    textoPregunta.textContent = pregunta.pregunta;
    numeroPreguntaActual.textContent = indicePreguntaActual + 1;
    numeroPreguntaTotal.textContent = preguntasActuales.length;
    progressbar.style.width = `${
      ((indicePreguntaActual + 1) / preguntasActuales.length) * 100
    }%`;

    // selectAll todas las opciones del DOM
    const opciones = opcionesContainer.querySelectorAll(".opcion");
    pregunta.opciones.forEach((opcionTexto, index) => {
      const opcion = opciones[index];
      opcion.querySelector(".texto-respuesta").textContent = opcionTexto;
      opcion.classList.remove("seleccionada", "correcta", "incorrecta");
      opcion.querySelector(".icono-correcto").style.display = "none";
      opcion.querySelector(".icono-incorrecto").style.display = "none";
    });

    respuestaSeleccionada = null;
    mensajeFeedback.textContent = "";
    botonEnviar.disabled = true;
  }

  listaCategorias.addEventListener("click", (e) => {
    const categoriaDiv = e.target.closest(".categoria");
    if (!categoriaDiv) return;

    const categoriaSeleccionada = categoriaDiv.dataset.categoria;
    const categoriaObj = quizPreguntas.find(
      (cat) => cat.categoria.toLowerCase() === categoriaSeleccionada
    );
    if (!categoriaObj) return alert("Categoría no encontrada.");

    preguntasActuales = categoriaObj.preguntas;
    indicePreguntaActual = 0;
    puntaje = 0;
    bienvenida.classList.remove("active");
    quiz.style.display = "block";
    resultado.style.display = "none";
    mostrarPregunta();
  });

  opcionesContainer.addEventListener("click", (e) => {
    const opcionDiv = e.target.closest(".opcion");
    if (!opcionDiv) return;

    const opciones = opcionesContainer.querySelectorAll(".opcion");
    opciones.forEach((op) => op.classList.remove("seleccionada"));
    opcionDiv.classList.add("seleccionada");
    respuestaSeleccionada =
      opcionDiv.querySelector(".texto-respuesta").textContent;
    botonEnviar.disabled = false;
  });

  botonEnviar.addEventListener("click", () => {
    const pregunta = preguntasActuales[indicePreguntaActual];
    const opciones = opcionesContainer.querySelectorAll(".opcion");

    opciones.forEach((opcion) => {
      const texto = opcion.querySelector(".texto-respuesta").textContent;
      const iconoCorrecto = opcion.querySelector(".icono-correcto");
      const iconoIncorrecto = opcion.querySelector(".icono-incorrecto");

      if (texto === pregunta.respuestaCorrecta) {
        opcion.classList.add("correcta");
        iconoCorrecto.style.display = "inline";
      } else if (texto === respuestaSeleccionada) {
        opcion.classList.add("incorrecta");
        iconoIncorrecto.style.display = "inline";
      }
    });

    if (respuestaSeleccionada === pregunta.respuestaCorrecta) {
      puntaje++;
      mensajeFeedback.textContent = "¡Correcto!";
    } else {
      mensajeFeedback.textContent = `Incorrecto. La respuesta correcta era: ${pregunta.respuestaCorrecta}`;
    }

    botonEnviar.disabled = true;

    setTimeout(() => {
      indicePreguntaActual++;
      if (indicePreguntaActual < preguntasActuales.length) {
        mostrarPregunta();
      } else {
        mostrarResultado();
      }
    }, 2000);
  });

  function mostrarResultado() {
    quiz.style.display = "none";
    resultado.style.display = "block";
    mensajeFinal.textContent = `Tu puntaje fue ${puntaje} de ${preguntasActuales.length}`;
  }

  botonReiniciar.addEventListener("click", () => {
    resultado.style.display = "none";
    bienvenida.classList.add("active");
  });
});
