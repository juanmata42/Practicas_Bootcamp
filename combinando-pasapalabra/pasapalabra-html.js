let user="MasterMind"
document.getElementById("userNombre").focus();

//coge el nombre y "empieza todo"
document.getElementById('userNombre').addEventListener('keydown', function(event) {
        if (event.code === 'Enter')
        {
            userNameCatcher();
        }
    });

function userNameCatcher()
  {
    event.preventDefault();
    user = document.getElementById("userNombre").value
    if (user === ""||user===null) {
        user = "Anónimo";
    }
    document.getElementById("ventanaEntrada").style.display="none";
    document.getElementById("preguntando").style.display="block";
    document.getElementById("respuesta").focus();
    timedCount()
    intro.play();
    
    //la camarita....guiña el ojo profe! ;)
let video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}
    }

 //funcion del fallo
  function falloRisas() {
        fallo.play();
        document.getElementById("risas").style.display="block";
        setTimeout((() => {document.getElementById("risas").style.display="none";}),1000)
      }

    // Elimina los diacríticos de un texto excepto si es una "ñ" (ES6) y pone en minusculas

    function eliminarDiacriticosEs(texto) {
        return texto
            .normalize("NFD")
            .replace(
                /([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,
                "$1"
            )
            .normalize()
            .toLowerCase();
    }
//Get answer when enter is pressed
let respuesta=""
let index=0
document.getElementById('respuesta').addEventListener('keydown', function(event) {
        if (event.code === 'Enter')
        {
            event.preventDefault();
            answering();
        }
    });
function answering()
{ 
    event.preventDefault();
    respuesta=eliminarDiacriticosEs(document.getElementById('respuesta').value)
    if (respuesta===questions[index].answer)
    {
        puntos+=10
        document.getElementById("pointsDisplay").innerText=puntos;
        questions[index].status = 1;
        document.getElementById('respuesta').value="";
        questions[index].display.classList.replace("seleccionada","acierto");
        correcto.play()
        nextQuestion();
    }
    else if (respuesta==="pasapalabra"||respuesta===""||respuesta===null)
    {
        questions[index].display.classList.remove("seleccionada");
        index+=1;
        if (index===27)
                    {
                        index=0;
                    }
        document.getElementById('respuesta').value="";
        nextQuestion()
    }
    else
    {
        questions[index].status = 1
        puntos-=5
        document.getElementById("pointsDisplay").innerText=puntos;
        document.getElementById('respuesta').value="";
        questions[index].display.classList.replace("seleccionada","fallo");
        falloRisas() 
        nextQuestion()
    }
}

  //Starts the next unanswered question
function nextQuestion() {

            if (statusCheck().every(s => s === 1))
                        {
                            finDelJuego()
                        }
        
            else if (questions[index].status === 0) {
                    document.getElementById("pregunta").innerText=questions[index].question; 
                    questions[index].display.classList.add("seleccionada");
            }
            else {
                index+=1;
                if (index>26)
                    {
                        index=0;
                    } 
                nextQuestion(); }
                        
        }
        

    

    //game ending
    function finDelJuego() {
        terminado=1
        document.getElementById("preguntando").style.display="none";
        puntuaciones.push({ nombre: user, puntuacion: puntos });
        puntuaciones.sort((a, b) => b.puntuacion - a.puntuacion);
        for (let i=0; i<puntuaciones.length; i++)
        {
            document.getElementById(i).innerText=`${puntuaciones[i].nombre} ${puntuaciones[i].puntuacion}`; 
        }
        document.getElementById("puntuaciones").style.display="block";
    }

//timer function
function timedCount() {
  document.getElementById("secondsDisplay").innerText = tiempo;
  tiempo -= 1;
  if (tiempo===0){document.getElementById("secondsDisplay").innerText = tiempo; finDelJuego();}
  else if (terminado===1){document.getElementById("secondsDisplay").innerText = tiempo;}
    else{segundo = setTimeout(timedCount, 1000);}
  
}
    //get the status of all questions

    function statusCheck() {
        let listaStatus = [];
        for (let i = 0; i < questions.length; i++) {
            listaStatus.push(questions[i].status);
        }

        return listaStatus;
    }


    const questions = [
        {
            letter: "a",
            answer: "aragorn",
            status: 0,
            display: document.querySelector("#containerA"),
            question:
                "CON LA A. Legítimo Rey de Gondor en 'El señor de los anillos'",
        },

        {
            letter: "b",
            answer: "bastet",
            status: 0,
            display: document.querySelector("#containerB"),
            question:
                "CON LA B. Diosa egipcia de la protección, amor y armonía. Su cabeza tiene forma de gato",
        },

        {
            letter: "c",
            answer: "castamere",
            status: 0,
            display: document.querySelector("#containerC"),
            question:
                "CON LA C. De las novelas 'Cancion de hielo y fuego', 'Las lluvias de ...'",
        },

        {
            letter: "d",
            answer: "dinosaurio",
            status: 0,
            display: document.querySelector("#containerD"),
            question:
                "CON LA D. Tipo de animal grande y extinto que asombró a la generación de los 90",
        },

        {
            letter: "e",
            answer: "esperanto",
            status: 0,
            display: document.querySelector("#containerE"),
            question:
                "CON LA E. Idioma universal artificial creado por el polaco L. L. Zamenhof.",
        },

        {
            letter: "f",
            answer: "fantasia",
            status: 0,
            display: document.querySelector("#containerF"),
            question:
                "CON LA F. Genero literario donde aparecen caballeros, dragones y magia.",
        },

        {
            letter: "g",
            answer: "galaxias",
            status: 0,
            display: document.querySelector("#containerG"),
            question:
                "CON LA G. Título original en España de aclamada película de ciencia ficción. 'La guerra de las ...'",
        },

        {
            letter: "h",
            answer: "hajime",
            status: 0,
            display: document.querySelector("#containerH"),
            question:
                "CON LA H. Palabra japonesa utilizada para comenzar en artes marciales como Karate o Judo.",
        },

        {
            letter: "i",
            answer: "isengard",
            status: 0,
            display: document.querySelector("#containerI"),
            question:
                "CON LA I. Pais-Ciudad controlada por Saruman en 'El señor de los anillos'",
        },

        {
            letter: "j",
            answer: "juanma",
            status: 0,
            display: document.querySelector("#containerJ"),
            question:
                "CON LA J. Nombre abreviado del creador de este programa.",
        },

        {
            letter: "k",
            answer: "katana",
            status: 0,
            display: document.querySelector("#containerK"),
            question: "CON LA K. Espada japonesa portada por los samurais.",
        },

        {
            letter: "l",
            answer: "leprechaun",
            status: 0,
            display: document.querySelector("#containerL"),
            question:
                "CON LA L. Duende de la mitología irlandesa que espera al final del arcoiris.",
        },

        {
            letter: "m",
            answer: "mascaron",
            status: 0,
            display: document.querySelector("#containerM"),
            question:
                "CON LA M. Figura decorativa tallada en madera situada en la proa de antiguos buques.",
        },

        {
            letter: "n",
            answer: "nigromante",
            status: 0,
            display: document.querySelector("#containerN"),
            question:
                "CON LA N. Mago especializado en magia negra y resucitar muertos.",
        },

        {
            letter: "ñ",
            answer: "ñu",
            status: 0,
            display: document.querySelector("#containerÑ"),
            question: "CON LA Ñ. Antílope sudafricano.",
        },

        {
            letter: "o",
            answer: "orco",
            status: 0,
            display: document.querySelector("#containerO"),
            question:
                "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
        },

        {
            letter: "p",
            answer: "protoss",
            status: 0,
            display: document.querySelector("#containerP"),
            question:
                "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
        },

        {
            letter: "q",
            answer: "queliceros",
            status: 0,
            display: document.querySelector("#containerQ"),
            question:
                "CON LA Q. Piezas bucales presentes en un subfilo de artrópodos como los arácnidos.",
        },

        {
            letter: "r",
            answer: "rivendell",
            status: 0,
            display: document.querySelector("#containerR"),
            question:
                "CON LA R. Ciudad Elfica gobernada por Elrond en 'El señor de los anillos'",
        },

        {
            letter: "s",
            answer: "stackoverflow",
            status: 0,
            display: document.querySelector("#containerS"),
            question:
                "CON LA S. Comunidad salvadora de todo desarrollador informático",
        },

        {
            letter: "t",
            answer: "terminator",
            status: 0,
            display: document.querySelector("#containerT"),
            question:
                "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
        },

        {
            letter: "u",
            answer: "ukelele",
            status: 0,
            display: document.querySelector("#containerU"),
            question:
                "CON LA U. Instrumento de cuerda similar a la guitarra pero más pequeño.",
        },

        {
            letter: "v",
            answer: "vikingos",
            status: 0,
            display: document.querySelector("#containerV"),
            question:
                "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
        },

        {
            letter: "w",
            answer: "wanda",
            status: 0,
            display: document.querySelector("#containerW"),
            question:
                "CON LA W. Nombre de la bruja escarlata en el universo Marvel",
        },

        {
            letter: "x",
            answer: "xilofono",
            status: 0,
            display: document.querySelector("#containerX"),
            question:
                "CON LA X. Instrumento musical de percusión con láminas afinadas cada una a un tono específico.",
        },

        {
            letter: "y",
            answer: "yeti",
            status: 0,
            display: document.querySelector("#containerY"),
            question:
                "CON LA Y. Abobinable hombre de las nieves, críptido interpretado como un simio gigante del himalaya.",
        },

        {
            letter: "z",
            answer: "zorro",
            status: 0,
            display: document.querySelector("#containerZ"),
            question:
                "CON LA Z. Vulpes vulpes, mamífero de la familia cánidos, depredador de conejos y gallinas entre otros. ",
        },
    ];


  //Orden principal
    let puntuaciones = [
        { nombre: "GamerGranny", puntuacion: 220 },
        { nombre: "AdolfoNumber1", puntuacion: 170 },
        { nombre: "ASS", puntuacion: 69 },
        { nombre: "Güiner", puntuacion: 1 },
        { nombre: "LaRespuesta", puntuacion: 42 },
    ];
    let correcto = new Audio('correcto.mp3');
    let fallo = new Audio('sitcom-laughing-1.mp3')
    let intro = new Audio('intro.mp3');
    let puntos=0
    let tiempo=100
    let terminado=0
    nextQuestion();
