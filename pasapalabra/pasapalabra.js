//funcion global
function pasapalabra()
{

    // Elimina los diacríticos de un texto excepto si es una "ñ" (ES6) y pone en minusculas

    function eliminarDiacriticosEs(texto) 
    {

        return texto
               .normalize('NFD')
               .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
               .normalize().toLowerCase();
    }

    //asks for user and greets

    function userwelcome()
    {
        alert(`Bienvenida sea la persona ${user}.\nTienes 90 segundos para responder a 27 preguntas.\nSi respondes correctamente, ganarás 10 puntos.\nSi respondes incorrectamente, perderás 5 puntos.\nLas preguntas sin contestar ni suman ni restan.\nSi quieres saltarte una pregunta, responde pasapalabra.\n¡Suerte en el concurso!.`)
    };

    //get the status of all questions

    function statusCheck()
    {
        let listaStatus=[]
        for (let i=0; i <questions.length; i++)
            {listaStatus.push(questions[i].status)}

        return listaStatus
    }

    //Starts the next unanswered question

    function nextQuestion()
    {
        for (var i = 0; i <questions.length; i++)
        {                       
            if (questions[i].status===0)
                {
                    let userAnswer=eliminarDiacriticosEs(prompt(questions[i].question))
                    if (userAnswer==="pasapalabra")
                    {
                        alert("Siguiente pregunta.")
                    }
                    else if (userAnswer===questions[i].answer)
                    {
                        alert("¡Correcto!")
                        questions[i].status=1
                        userPoints+=10
                        if (statusCheck().every(s => s === 1))
                        {
                            clearTimeout(temporizador)
                            finDelJuego()
                        }
                    }
                    else
                    {
                        alert("Incorrecto.")
                        questions[i].status=1
                        userPoints-=5
                        if (statusCheck().every(s => s === 1))
                        {
                            clearTimeout(temporizador)
                            finDelJuego()
                        }
                    }

                }

        }
        nextQuestion()

    }

   //game ending
   function finDelJuego()
   {
        alert(`¡Se ha terminado! ${user}, tu puntuación ha sido ${userPoints}. Mira en la consola cómo has quedado en el ranking.`)
        
        puntuaciones.push({"nombre":user,"puntuacion":userPoints})
        puntuaciones.sort((a, b) =>  b.puntuacion - a.puntuacion);
        console.table(puntuaciones)
        let vicio=confirm("¿Quieres jugar otra vez?")
        if (vicio)
        {location.reload()}
        else {stop()}
   }



    const questions = [

        { letter: "a", answer: "aragorn", status: 0, question: "CON LA A. Legítimo Rey de Gondor en 'El señor de los anillos'"},

        { letter: "b", answer: "bastet", status: 0, question: "CON LA B. Diosa egipcia de la protección, amor y armonía. Su cabeza tiene forma de gato"},

        { letter: "c", answer: "castamere", status: 0, question: "CON LA C. De las novelas 'Cancion de hielo y fuego', 'Las lluvias de ...'"},

        { letter: "d", answer: "dinosaurio", status: 0, question: "CON LA D. Tipo de animal grande y extinto que asombró a la generación de los 90"},

        { letter: "e", answer: "esperanto", status: 0, question: "CON LA E. Idioma universal artificial creado por el polaco L. L. Zamenhof."},

        { letter: "f", answer: "fantasia", status: 0, question: "CON LA F. Genero literario donde aparecen caballeros, dragones y magia."},

        { letter: "g", answer: "galaxias", status: 0, question: "CON LA G. Título original en España de aclamada película de ciencia ficción. 'La guerra de las ...'"},

        { letter: "h", answer: "hajime", status: 0, question: "CON LA H. Palabra japonesa utilizada para comenzar en artes marciales como Karate o Judo."},

        { letter: "i", answer: "isengard", status: 0, question: "CON LA I. Pais-Ciudad controlada por Saruman en 'El señor de los anillos'"},

        { letter: "j", answer: "juanma", status: 0, question: "CON LA J. Nombre abreviado del creador de este programa."},

        { letter: "k", answer: "katana", status: 0, question: "CON LA K. Espada japonesa portada por los samurais."},

        { letter: "l", answer: "leprechaun", status: 0, question: "CON LA L. Duende de la mitología irlandesa que espera al final del arcoiris."},

        { letter: "m", answer: "mascaron", status: 0, question: "CON LA M. Figura decorativa tallada en madera situada en la proa de antiguos buques."},

        { letter: "n", answer: "nigromante", status: 0, question: "CON LA N. Mago especializado en magia negra y resucitar muertos."},

        { letter: "ñ", answer: "ñu", status: 0, question: "CON LA Ñ. Antílope sudafricano."},

        { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},

        { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},

        { letter: "q", answer: "queliceros", status: 0, question: "CON LA Q. Piezas bucales presentes en un subfilo de artrópodos como los arácnidos."},

        { letter: "r", answer: "rivendel", status: 0, question: "CON LA R. Ciudad Elfica gobernada por Elrond en 'El señor de los anillos'"},

        { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},

        { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},

        { letter: "u", answer: "ukelele", status: 0, question: "CON LA U. Instrumento de cuerda similar a la guitarra pero más pequeño."},

        { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},

        { letter: "w", answer: "wanda", status: 0, question: "CON LA W. Nombre de la bruja escarlata en el universo Marvel"},

        { letter: "x", answer: "xilofono", status: 0, question: "CON LA X. Instrumento musical de percusión con láminas afinadas cada una a un tono específico."},

        { letter: "y", answer: "yeti", status: 0, question: "CONTIENE LA Y. Abobinable hombre de las nieves, críptido interpretado como un simio gigante del himalaya."},

        { letter: "z", answer: "zorro", status: 0, question: "CON LA Z. Vulpes vulpes, mamífero de la familia cánidos, depredador de conejos y gallinas entre otros. "}, ]


        //Orden principal
        let userPoints=0
        let user=prompt("¿Cuál es tu nombre, concursante?");
        if (user==="" || user===null){user="Anónimo"}
        userwelcome()
        let tiempo = 90
        let puntuaciones=[{nombre:"GamerGranny",puntuacion:220},
                            {nombre:"AdolfoNumber1",puntuacion:170},
                            {nombre:"ASS",puntuacion:69},
                            {nombre:"Güiner",puntuacion:1},
                            {nombre:"LaRespuesta",puntuacion:42}]
        let temporizador=setTimeout(finDelJuego,90000)
        nextQuestion()

}
pasapalabra()