export const quizPreguntas = [
  {
    categoria: "html",
    icono: "./",
    preguntas: [
      {
        pregunta: "¿Qué significa HTML?",
        opciones: [
          "HyperText Markup Language",
          "Home Tool Markup Language",
          "Hyperlinks and Text Markup Language",
          "Hyper Tool Markup Language",
        ],
        respuestaCorrecta: "HyperText Markup Language",
      },
      {
        pregunta: "¿Cuál es el elemento principal para crear un enlace?",
        opciones: ["<img>", "<a>", "<link>", "<href>"],
        respuestaCorrecta: "<a>",
      },
      {
        pregunta: "¿Qué etiqueta se usa para insertar una imagen?",
        opciones: ["<img>", "<picture>", "<src>", "<image>"],
        respuestaCorrecta: "<img>",
      },
      {
        pregunta: "¿Cuál es la etiqueta correcta para un salto de línea?",
        opciones: ["<break>", "<br>", "<lb>", "<line>"],
        respuestaCorrecta: "<br>",
      },
      {
        pregunta:
          "¿Qué atributo se usa para especificar un texto alternativo en una imagen?",
        opciones: ["alt", "src", "title", "href"],
        respuestaCorrecta: "alt",
      },
      {
        pregunta: "¿Cuál es la etiqueta para crear una lista ordenada?",
        opciones: ["<ul>", "<ol>", "<li>", "<list>"],
        respuestaCorrecta: "<ol>",
      },
      {
        pregunta: "¿Qué etiqueta define el encabezado más grande?",
        opciones: ["<h6>", "<header>", "<h1>", "<head>"],
        respuestaCorrecta: "<h1>",
      },
      {
        pregunta:
          "Cuál es el elemento correcto para insertar una línea horizontal?",
        opciones: ["<hr>", "<line>", "<tr>", "<break>"],
        respuestaCorrecta: "<hr>",
      },
      {
        pregunta: "¿Cuál es la etiqueta correcta para definir un párrafo?",
        opciones: ["<text>", "<p>", "<par>", "<paragraph>"],
        respuestaCorrecta: "<p>",
      },
    ],
  },
  {
    categoria: "css",
    icono: "./",
    preguntas: [
      {
        pregunta: "¿Qué significa CSS?",
        opciones: [
          "Computer Style Sheets",
          "Creative Style System",
          "Cascading Style Sheets",
          "Colorful Style Sheets",
        ],
        respuestaCorrecta: "Cascading Style Sheets",
      },
      {
        pregunta: "¿Cuál es la propiedad para cambiar el color del texto?",
        opciones: ["background-color", "color", "font-color", "text-style"],
        respuestaCorrecta: "color",
      },
      {
        pregunta: "¿Cómo se selecciona un elemento con id 'menu' en CSS?",
        opciones: [".menu", "#menu", "menu", "*menu"],
        respuestaCorrecta: "#menu",
      },
      {
        pregunta: "¿Qué propiedad se usa para cambiar el tamaño de la fuente?",
        opciones: ["font-size", "text-size", "font-style", "size"],
        respuestaCorrecta: "font-size",
      },
      {
        pregunta: "¿Cuál es el valor por defecto de la propiedad 'position'?",
        opciones: ["absolute", "fixed", "relative", "static"],
        respuestaCorrecta: "relative",
      },
      {
        pregunta: "¿Qué propiedad se usa para poner una imagen de fondo?",
        opciones: [
          "background-image",
          "image-background",
          "background-img",
          "img-background",
        ],
        respuestaCorrecta: "background-image",
      },
      {
        pregunta: "¿Cómo se aplica un margen de 10px a todos los lados?",
        opciones: [
          "margin: 10px;",
          "margin: 10px 0;",
          "margin: 0 10px;",
          "margin: all 10px;",
        ],
        respuestaCorrecta: "margin: 10px;",
      },
      {
        pregunta: "¿Cuál es la unidad relativa en CSS?",
        opciones: ["px", "em", "cm", "pt"],
        respuestaCorrecta: "em",
      },
      {
        pregunta:
          "¿Qué selector selecciona todos los elementos <p> dentro de un <div>?",
        opciones: ["div p", "div.p", "p div", "div+p"],
        respuestaCorrecta: "div p",
      },
      {
        pregunta:
          "¿Qué propiedad hace que un elemento sea invisible pero ocupe espacio?",
        opciones: [
          "display: none;",
          "opacity: 0;",
          "visibility: hidden;",
          "hidden: true;",
        ],
        respuestaCorrecta: "visibility: hidden;",
      },
    ],
  },
  {
    categoria: "js",
    icono: "./",
    preguntas: [
      {
        pregunta: "¿Cuál es el comando para iniciar un archivo con  Node.js?",
        opciones: [
          "node archivo.js",
          "npm archivo.js",
          "start archivo.js",
          "run archivo.js",
        ],
        respuestaCorrecta: "node archivo.js",
      },
      {
        pregunta: "¿Qué método se usa para mostrar un mensaje en la consola?",
        opciones: ["console.show()", "console.log()", "alert()", "print()"],
        respuestaCorrecta: "console.log()",
      },
      {
        pregunta:
          "¿Cómo se escribe un comentario de una sola línea en JavaScript?",
        opciones: [
          "# comentario",
          "// comentario",
          "<!-- comentario -->",
          "** comentario **",
        ],
        respuestaCorrecta: "// comentario",
      },
      {
        pregunta: "¿Qué comando instala un paquete usando npm?",
        opciones: [
          "npm install paquete",
          "npm get paquete",
          "npm add paquete",
          "npm put paquete",
        ],
        respuestaCorrecta: "npm install paquete",
      },
      {
        pregunta: "¿Cómo seleccionas un elemento por su id en el DOM?",
        opciones: [
          "document.getElementById('miId')",
          "document.querySelector('.miId')",
          "document.getElement('miId')",
          "document.id('miId')",
        ],
        respuestaCorrecta: "document.getElementById('miId')",
      },
      {
        pregunta: "¿Qué método añade un elemento al final de un array?",
        opciones: ["push()", "pop()", "shift()", "concat()"],
        respuestaCorrecta: "push()",
      },
      {
        pregunta: "¿Cuál es el resultado de 2 + '2' en JavaScript?",
        opciones: ["4", "22", "NaN", "Error"],
        respuestaCorrecta: "22",
      },
      {
        pregunta: "¿Qué función convierte una cadena a número entero?",
        opciones: [
          "parseInt()",
          "parseFloat()",
          "toString()",
          "NumberString()",
        ],
        respuestaCorrecta: "parseInt()",
      },
      {
        pregunta:
          "¿Cómo se accede al primer elemento de un array llamado 'colores'?",
        opciones: ["colores[0]", "colores(0)", "colores{0}", "colores.0"],
        respuestaCorrecta: "colores[0]",
      },
    ],
  },
];
