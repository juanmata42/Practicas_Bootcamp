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

//turns array into carton
function arrayToCarton()
{
	cartonPlayer=[{B:cartonArray[0],I:cartonArray[1],N:cartonArray[2],G:cartonArray[3],O:cartonArray[4]}]
	console.clear()
	console.table(cartonPlayer)
}

//does the thing until a number that hasn't appeared yet appears
function bombo()
{
	let nuevoNum=Math.floor(Math.random() * (16-1))+1
	if (numerosSalidos.includes(nuevoNum))
		{bombo()}
	else
		{
			numerosSalidos.push(nuevoNum)
			alert(`Ha salido el ${nuevoNum}.`)
			return nuevoNum
		}
}

//Checks if inside carton and if so, replaces with X
function cartonChecker()
{
	let nuevoNum=bombo()

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
	  		nuevoTurno()
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

