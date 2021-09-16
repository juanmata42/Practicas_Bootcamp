let puntuaciones=[{nombre:"GamerGranny",puntuacion:93},
						{nombre:"AdolfoNumber1",puntuacion:43},
						{nombre:"ASS",puntuacion:85},
						{nombre:"Güiner",puntuacion:23},
						{nombre:"Respuesta",puntuacion:42}]

let cartonPlayer=[]
let cartonArray=[8,5,1,4,14]
let numerosSalidos=[]
let lineas=[1]
let puntos=100
let cuentaturnos=0

//turns array into carton
function arrayToCarton()
{
	cartonPlayer=[{B:cartonArray[0],I:cartonArray[1],N:cartonArray[2],G:cartonArray[3],O:cartonArray[4]}]
	console.clear()
	console.table(cartonPlayer)
}

//The fisher-Yates shuffle
function shuffle(array) {
  var copy = [], n = array.length, i;

  // While there remain elements to shuffle…
  while (n) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * n--);

    // And move it to the new array.
    copy.push(array.splice(i, 1)[0]);
  }

  return copy;
}

//range generator for the game (because i love python, does the same thing)

function range(start, stop, step) {
    if (typeof stop == 'undefined') {
        // one param defined
        stop = start;
        start = 0;
    }

    if (typeof step == 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }

    return result;
};

let numerosPartida=shuffle(range(1,16))

//Checks if inside carton and if so, replaces with X
function cartonChecker()
{
	let nuevoNum=numerosPartida[cuentaturnos]
	alert(`Ha salido el ${nuevoNum}.`)
	if (cartonArray.includes(nuevoNum)) 
		{
	  		cartonArray.splice(cartonArray.indexOf(nuevoNum),1,"X")
	  		arrayToCarton()	  		
	  		if (cartonArray.every(i => i === "X"))
	  			{
	  				alert("Linea!")
	  				//This only for bingo simple
	  				ganaste()
	  			}
	  		else
	  		{
	  			nuevoTurno()	  			
	  		}
		}
	else
		{
			arrayToCarton()
			nuevoTurno()
		}
}

//Siguiente turno
function nuevoTurno()
{
	if(confirm("¿Seguimos jugando?"))
		{
			puntos-=1
			cuentaturnos+=1
			cartonChecker()
		}
	else {stop()}

}

//Funcion fin del juego ganaste
function ganaste()
{	

	alert("¡Ganaste!")
	let nombre=(prompt("Escribe tu nombre para guardar tu puntuación."))
	puntuaciones.push({"nombre":nombre,"puntuacion":puntos})
	puntuaciones.sort((a, b) =>  b.puntuacion - a.puntuacion);
	console.table(puntuaciones)
	let vicio=confirm("¿Quieres jugar otra vez?")
	if (vicio)
		{location.reload()}
	else {stop()}
}	

//global function
function bingo()
{

	let cartonPlayer=[]
	let cartonArray=[4,8,2,10,14]
	let numerosSalidos=[]
	let lineas=[1]
	let puntos=100

	alert("Mira tu cartón en la consola.")
	arrayToCarton()

	cartonChecker()
}

bingo()

