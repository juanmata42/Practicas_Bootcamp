const questions = [

    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Acción que realiza una supuesta criatura extraterrestre cuando quiere apoderarse de alguien"},
    { letter: "a", answer: "alpinismo", status: 0, question: "CON LA A. Deporte que consiste en la ascensión a las altas montañas"},
    { letter: "a", answer: "alegre", status: 0, question: "CON LA A. Sinónimo de contento"},

    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    { letter: "b", answer: "biblioteca", status: 0, question: "CON LA B. Lugar en el que se lleva a cabo el préstamo de libros"  },
    { letter: "b", answer: "boda", status: 0, question: "CON LA B. Ceremonia mediante la cual se unen en matrimonio dos presonas"},
    
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
    { letter: "c", answer: "crecida", status: 0, question: "CON LA C. Aumento del caudal de los ríos y arroyos"},
    { letter: "c", answer: "cereza", status: 0, question: "CON LA C. Fruto del cerezo de color rojo oscuro"},

    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
    { letter: "d", answer: "descargar", status: 0, question: "CON LA D. Si le añado el prefijo des- al verbo cargar, tienes"},
    { letter: "d", answer: "desodorante", status: 0, question: "CON LA D. Producto que se utiliza para suprimir el olor corporal o de algún recinto"},

    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
    { letter: "e", answer: "enero", status: 0, question: "CON LA E. Primer mes del año"},
    { letter: "e", answer: "esdrújula", status: 0, question: "CON LA E. Palabra cuya sílaba tónica es la antepenúlitima"},

    { letter: "f", answer: "fácil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
    { letter: "f", answer: "frutero", status: 0, question: "CON LA F. Recipiente en el que se coloca la fruta"},
    { letter: "f", answer: "futuro", status: 0, question: "CON LA F. Tiempo verbal que indica que la acción se va a realizar"},

    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
    { letter: "g", answer: "guitarra", status: 0, question: "CON LA G. Instrumento musical de seis cuerdas"},
    { letter: "g", answer: "grave", status: 0, question: "CON LA G. Antónimo de leve"},

    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
    { letter: "h", answer: "hoguera", status: 0, question: "CON LA H. Fuego hecho al aire libre con materias combustibles que levantan mucha llama"},
    { letter: "h", answer: "historia", status: 0, question: "CON LA H. Conjunto de todos los hechos ocurridos en tiempos pasados"},

    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
    { letter: "i", answer: "incubadora", status: 0, question: "CON LA I. Recinto en que se tienen a los niños prematuros hasta que alcanzan la madurez"},
    { letter: "i", answer: "interrogativo", status: 0, question: "CON LA I. Enunciado que sirve para preguntar"},

    { letter: "j", answer: "jabalí", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
    { letter: "j", answer: "jupiter", status: 0, question: "CON LA J. Planeta más grande del Sistema Solar"},
    { letter: "j", answer: "jeque", status: 0, question: "CON LA J. Entre los musulmanes, jefe religioso o político"},

    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
    { letter: "k", answer: "kilómetros", status: 0, question: "CON LA K. Unidad de medida que indica distancia"},
    { letter: "k", answer: "kayak", status: 0, question: "CON LA K. Canoa de pesca usada por los esquimales, tradicionalmente fabricada con piel de foca, su cubierta solo tiene una abertura"},

    { letter: "l", answer: "licántropo", status: 0, question: "CON LA L. Hombre lobo"},
    { letter: "l", answer: "laurel", status: 0, question: "CON LA L. Árbol siemore verde cuyas ramas, formando una corona, se otorga como símbolo de glória y fama"},
    { letter: "l", answer: "los", status: 0, question: "CON LA L. Artículo masculino plural"},

    { letter: "m", answer: "misántropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
    { letter: "m", answer: "mamifero", status: 0, question: "CON LA M. Conjunto de animales vertebrados que nacen del vientre de la madre"},
    { letter: "m", answer: "mecanismo", status: 0, question: "CON LA M. Conjunto de las partes de una máquina en su disposición adecuada"},

    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},
    { letter: "n", answer: "nasa", status: 0, question: "CON LA N. Organismo aeroespacial estadounidense constituido en el año 1958 como sucesor de la NACA"},
    { letter: "n", answer: "nido", status: 0, question: "CON LA N. Cavidad, agujero o conjunto de celdillas donde procrean diversos animales"},

    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
    { letter: "ñ", answer: "compañía", status: 0, question: "CONTIENE LA Ñ. Agrupación de actores, cantantes o bailarines unidos para representar espectáculos escénicos"},
    { letter: "ñ", answer: "añorar", status: 0, question: "CONTIENE LA Ñ. Sinónimo de extrañar, echar de menos"},

    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
    { letter: "o", answer: "omega", status: 0, question: "CON LA O. Vigesimocuarta letra del alfabeto griego que corresponde a la 'O' larga del latino"},
    { letter: "o", answer: "ortografía", status: 0, question: "CON LA O. Conjunto de normas que regulan la escritura"},

    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
    { letter: "p", answer: "pantufla", status: 0, question: "CON LA P. Zapatilla sin talón "},
    { letter: "p", answer: "prenda", status: 0, question: "CON LA P.  Ropa, cada una de las vestimentas de una persona"},

    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
    { letter: "q", answer: "quebrar", status: 0, question: "CON LA Q. Romper, separar con violencia"},
    { letter: "q", answer: "quorum", status: 0, question: "CON LA Q. Número de individuos necesario para que un cuerpo deliberante tome cietos acuerdos"},

    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
    { letter: "r", answer: "rampa", status: 0, question: "CON LA R. Plano inclinado dispuesto para subir y bajar por él"},
    { letter: "r", answer: "riachuelo", status: 0, question: "CON LA R. Río pequeño y de poco caudal"},

    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
    { letter: "s", answer: "serrano", status: 0, question: "CON LA S. Se dice del jamón que está curado"},
    { letter: "s", answer: "sulfatar", status: 0, question: "CON LA S. Impregnar o bañar algo con sulfato"},

    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
    { letter: "t", answer: "tabaco", status: 0, question: "CON LA T. Planta de la familia de las solanáceas, originaria de América. Toda la planta tiene olor fuerte y es narcótica"},
    { letter: "t", answer: "tiempo", status: 0, question: "CON LA T. Magnitud física que permite ordenar la secuencia de los sucesos, esstableciendo un pasado, un presente y un futuro"},

    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
    { letter: "u", answer: "ubicar", status: 0, question: "CON LA U. Situar o instalar en determinado espacio o lugar"},
    { letter: "u", answer: "usual", status: 0, question: "CON LA U. Común o habitual"},

    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
    { letter: "v", answer: "valladolid", status: 0, question: "CON LA V. Ciudad más poblada de Castilla y León"},
    { letter: "v", answer: "vaca", status: 0, question: "CON LA V. Hembra del toro"},

    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
    { letter: "w", answer: "wifi", status: 0, question: "Con LA W. Sistema de conexión inalámbrica, dentro de una área determinada, entre dispositivos electrónicos, y frecuentemente para acceso a internet"},
    { letter: "w", answer: "waterpolo", status: 0, question: "CON LA W. Juego practicaddo en una picina entre dos equipos de siete jugadores cada uno"},

    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
    { letter: "x", answer: "xenofobia", status: 0, question: "CON LA X. Fobia a los extranjeros"},
    { letter: "x", answer: "xilofonista", status: 0, question: "CON LA X. Persona que toca el xilófono"},

    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
    { letter: "y", answer: "yacimiento", status: 0, question: "CON LA Y. Sitio donde se halla naturalmente una roca, un mineral o un fósil"},
    { letter: "y", answer: "yelmo", status: 0, question: "CON LA Y. Pieza de la armadura antigua que resguardaba la cabeza y el rostro"},

    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"},
    { letter: "z", answer: "zulo", status: 0, question: "CON LA Z. Lugar oculto y cerrado dispuesto para esconder ilegalmente cosas o personas secuestradas"}, 
    { letter: "z", answer: "zombi", status: 0, question: "CON LA Z. Persona que se supone muerta y reanimada por arte de brujería con el fin de dominar su voluntad"}, 

];
//Variables HTML
const buttonPlay = document.getElementById('buttonPlay');
const tiempo = document.getElementById('myTimer');
const palabras = document.getElementById('palabras');
const pregunta = document.getElementById('pregunta');
const ok = document.getElementById('ok');
const pasa = document.getElementById('buttonPasapalabra');
const parar = document.getElementById('stop');
let letras = document.getElementsByClassName('letter')
let aciertos = document.getElementById('true');
let fallos = document.getElementById('false');
let respuesta = document.getElementById('respuesta');

//Variables js
let pasapalabra = [];
let index = 0;
let palabrasPasadas = 0;
let segundaVuelta = false;

//Funcion que sortea preguntas
function empezar(){
    let start = 0
    let end = 3
    for(let i = 0; i < 27; i++){
        seleccion = questions.slice(start, end);
        sorteo = Math.floor(Math.random() * 3);
        pasapalabra.push(seleccion[sorteo]);
        start += 3;
        end += 3;        
    };
};

function changeColor(){
    for(let i = 0; i < letras.length; i++){
        if(letras[i].textContent === pasapalabra[index].letter && pasapalabra[index].status === 'a'){
            letras[i].style.backgroundColor = 'chartreuse'
        }else if(letras[i].textContent === pasapalabra[index].letter && pasapalabra[index].status === 'f'){
          letras[i].style.backgroundColor = 'rgb(209, 10, 10)';
        }else if(letras[i].textContent === pasapalabra[index].letter && pasapalabra[index].status === 'p'){
          letras[i].style.backgroundColor = 'rgb(179, 216, 45)';
        }//else if(empezar === false){
        //     letras[i].style.backgroundColor = 'rgb(18, 18, 110)';
        // };
      };
};

function eliminarPregunta(){
    pasapalabra.splice(index, 1)
}

function trueFalse(){
    if(respuesta.value === pasapalabra[index].answer){
        pasapalabra[index].status = 'a';
        aciertos.textContent = +aciertos.textContent + 1;
        palabras.textContent = +palabras.textContent - 1;
        changeColor();
        eliminarPregunta();
    }else{
        pasapalabra[index].status = 'f';
        fallos.textContent = +fallos.textContent + 1;
        palabras.textContent = +palabras.textContent - 1;
        changeColor();
        eliminarPregunta();
        
    };
};

function dejarParaMasTarde(){
    pasapalabra[index].status = 'p'
    palabrasPasadas++
    changeColor();
    
}
function buscarSiguientePregunta(){
    for(let i = 0; i < pasapalabra.length; i++){
            return index++;
    };
};

function newIndex() {
    if(+aciertos.textContent + +fallos.textContent +palabrasPasadas === 27){
        index = 0;
    }
}
function rosco(){
    pregunta.textContent = pasapalabra[index].question;
};

//onclick
buttonPlay.onclick = () => {
    if(pasapalabra.length !== 27){
        empezar();
        rosco();
    };
};

ok.onclick = () => {
    trueFalse();
    newIndex();
    rosco();
};

pasa.onclick = () => {
    dejarParaMasTarde();
    buscarSiguientePregunta();
    rosco();
}