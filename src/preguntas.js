export const quizPreguntas = [
    {
        categoria: "HTML",
        icono: "./",
        preguntas: [
            {
                pregunta: "¿Qué significa HTML?",
                opciones: [
                    "HyperText Markup Language",
                    "Home Tool Markup Language",
                    "Hyperlinks and Text Markup Language",
                    "Hyper Tool Markup Language"
                ],
                respuesta: 0
            },
            {
                pregunta: "¿Cuál es el elemento principal para crear un enlace?",
                opciones: [
                    "<img>",
                    "<a>",
                    "<link>",
                    "<href>"
                ],
                respuesta: 1
            },
            {
                pregunta: "¿Qué etiqueta se usa para insertar una imagen?",
                opciones: [
                    "<img>",
                    "<picture>",
                    "<src>",
                    "<image>"
                ],
                respuesta: 0
            },
            {
                pregunta: "¿Cuál es la etiqueta correcta para un salto de línea?",
                opciones: [
                    "<break>",
                    "<br>",
                    "<lb>",
                    "<line>"
                ],
                respuesta: 1
            },
            {
                pregunta: "¿Qué atributo se usa para especificar un texto alternativo en una imagen?",
                opciones: [
                    "alt",
                    "src",
                    "title",
                    "href"
                ],
                respuesta: 0
            },
            {
                pregunta: "¿Cuál es la etiqueta para crear una lista ordenada?",
                opciones: [
                    "<ul>",
                    "<ol>",
                    "<li>",
                    "<list>"
                ],
                respuesta: 1
            },
            {
                pregunta: "¿Qué etiqueta define el encabezado más grande?",
                opciones: [
                    "<h6>",
                    "<header>",
                    "<h1>",
                    "<head>"
                ],
                respuesta: 2
            },
            {
                pregunta: "Cuál es el elemento correcto para insertar una línea horizontal?",
                opciones: [
                    "<hr>",
                    "<line>",
                    "<tr>",
                    "<break>"
                ],
                respuesta: 0
            },
            {
                pregunta: "¿Cuál es la etiqueta correcta para definir un párrafo?",
                opciones: [
                    "<text>",
                    "<p>",
                    "<par>",
                    "<paragraph>"
                ],
                respuesta: 1
            }
        ]
    },
    {
        categoria: "CSS",
        icono: "./",
        preguntas: [
            {
                pregunta: "¿Qué significa CSS?",
                opciones: [
                    "Computer Style Sheets",
                    "Creative Style System",
                    "Cascading Style Sheets",
                    "Colorful Style Sheets"
                ],
                respuesta: 2
            },
            {
                pregunta: "¿Cuál es la propiedad para cambiar el color del texto?",
                opciones: [
                    "background-color",
                    "color",
                    "font-color",
                    "text-style"
                ],
                respuesta: 1
            },
            {
                pregunta: "¿Cómo se selecciona un elemento con id 'menu' en CSS?",
                opciones: [
                    ".menu",
                    "#menu",
                    "menu",
                    "*menu"
                ],
                respuesta: 1
            },
            {
                pregunta: "¿Qué propiedad se usa para cambiar el tamaño de la fuente?",
                opciones: [
                    "font-size",
                    "text-size",
                    "font-style",
                    "size"
                ],
                respuesta: 0
            },
            {
                pregunta: "¿Cuál es el valor por defecto de la propiedad 'position'?",
                opciones: [
                    "absolute",
                    "fixed",
                    "relative",
                    "static"
                ],
                respuesta: 3
            },
            {
                pregunta: "¿Qué propiedad se usa para poner una imagen de fondo?",
                opciones: [
                    "background-image",
                    "image-background",
                    "background-img",
                    "img-background"
                ],
                respuesta: 0
            },
            {
                pregunta: "¿Cómo se aplica un margen de 10px a todos los lados?",
                opciones: [
                    "margin: 10px;",
                    "margin: 10px 0;",
                    "margin: 0 10px;",
                    "margin: all 10px;"
                ],
                respuesta: 0
            },
            {
                pregunta: "¿Cuál es la unidad relativa en CSS?",
                opciones: [
                    "px",
                    "em",
                    "cm",
                    "pt"
                ],
                respuesta: 1
            },
            {
                pregunta: "¿Qué selector selecciona todos los elementos <p> dentro de un <div>?",
                opciones: [
                    "div p",
                    "div.p",
                    "p div",
                    "div+p"
                ],
                respuesta: 0
            },
            {
                pregunta: "¿Qué propiedad hace que un elemento sea invisible pero ocupe espacio?",
                opciones: [
                    "display: none;",
                    "opacity: 0;",
                    "visibility: hidden;",
                    "hidden: true;"
                ],
                respuesta: 2
            }
        ]
    },
    {
        categoria: "Javascript",
        icono: "./",
        preguntas: [
            {
                pregunta: "¿Cuál es el comando para iniciar un archivo con  Node.js?",
                opciones: [
                    "node archivo.js",
                    "npm archivo.js",
                    "start archivo.js",
                    "run archivo.js"
                ],
                respuesta: 0
            },
            {
                pregunta: "¿Qué método se usa para mostrar un mensaje en la consola?",
                opciones: [
                    "console.show()",
                    "console.log()",
                    "alert()",
                    "print()"
                ],
                respuesta: 1
            },
            {
                pregunta: "¿Cómo se escribe un comentario de una sola línea en JavaScript?",
                opciones: [
                    "# comentario",
                    "// comentario",
                    "<!-- comentario -->",
                    "** comentario **"
                ],
                respuesta: 1
            },
            {
                pregunta: "¿Qué comando instala un paquete usando npm?",
                opciones: [
                    "npm install paquete",
                    "npm get paquete",
                    "npm add paquete",
                    "npm put paquete"
                ],
                respuesta: 0
            },
            {
                pregunta: "¿Cómo seleccionas un elemento por su id en el DOM?",
                opciones: [
                    "document.getElementById('miId')",
                    "document.querySelector('.miId')",
                    "document.getElement('miId')",
                    "document.id('miId')"
                ],
                respuesta: 0
            },
            {
                pregunta: "¿Qué método añade un elemento al final de un array?",
                opciones: [
                    "push()",
                    "pop()",
                    "shift()",
                    "concat()"
                ],
                respuesta: 0
            },
            {
                pregunta: "¿Cuál es el resultado de 2 + '2' en JavaScript?",
                opciones: [
                    "4",
                    "22",
                    "NaN",
                    "Error"
                ],
                respuesta: 1
            },
            {
                pregunta: "¿Qué función convierte una cadena a número entero?",
                opciones: [
                    "parseInt()",
                    "parseFloat()",
                    "toString()",
                    "NumberString()"
                ],
                respuesta: 0
            },
            {
                pregunta: "¿Cómo se accede al primer elemento de un array llamado 'colores'?",
                opciones: [
                    "colores[0]",
                    "colores(0)",
                    "colores{0}",
                    "colores.0"
                ],
                respuesta: 0
            }
        ]
    }
]