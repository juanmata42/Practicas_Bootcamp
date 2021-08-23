let puntuaciones = [
	{ nombre: "GamerGranny", puntuacion: 80 },
	{ nombre: "AdolfoNumber1", puntuacion: 34 },
	{ nombre: "ASS", puntuacion: 69 },
	{ nombre: "Güiner", puntuacion: 1 },
	{ nombre: "Respuesta", puntuacion: 42 },
];

let cartonPlayer = [];
let cartonArray = [];
let numerosSalidos = [];
let lineaHecha = 1;
let puntos = 100;
let cuentaturnos = 0;
let numerosPartida = shuffle(range(1, 101));

//The fisher-Yates shuffle
function shuffle(array) {
	var copy = [],
		n = array.length,
		i;

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
	if (typeof stop == "undefined") {
		// one param defined
		stop = start;
		start = 0;
	}

	if (typeof step == "undefined") {
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
}

//creates new carton
function newCarton() {
	let seed = shuffle(range(1, 101));
	let cartonArray = seed.slice(0, 15);
	return cartonArray;
}

//turns array into carton
function arrayToCarton() {
	cartonPlayer = [
		{
			B: cartonArray[0],
			I: cartonArray[1],
			N: cartonArray[2],
			G: cartonArray[3],
			O: cartonArray[4],
		},
		{
			B: cartonArray[5],
			I: cartonArray[6],
			N: cartonArray[7],
			G: cartonArray[8],
			O: cartonArray[9],
		},
		{
			B: cartonArray[10],
			I: cartonArray[11],
			N: cartonArray[12],
			G: cartonArray[13],
			O: cartonArray[14],
		},
	];
	console.clear();
	console.table(cartonPlayer);
}

//Lineachecker
function lineacheck() {
	let linea1 = cartonArray.slice(0, 5);
	let linea2 = cartonArray.slice(5, 10);
	let linea3 = cartonArray.slice(10);

	if (lineaHecha === 1 && linea1.every((i) => i === "X")) {
		alert("Linea!");
		lineaHecha = 0;
	} else if (lineaHecha === 1 && linea2.every((i) => i === "X")) {
		alert("Linea!");
		lineaHecha = 0;
	} else if ((lineaHecha === 1) === 1 && linea3.every((i) => i === "X")) {
		alert("Linea!");
		lineaHecha = 0;
	}
}

//Checks if inside carton and if so, replaces with X
function cartonChecker() {
	let nuevoNum = numerosPartida[cuentaturnos];
	alert(`Ha salido el ${nuevoNum}.`);
	if (cartonArray.includes(nuevoNum)) {
		cartonArray.splice(cartonArray.indexOf(nuevoNum), 1, "X");
		arrayToCarton();
		lineacheck();

		if (cartonArray.every((i) => i === "X")) {
			ganaste();
		}
	} else {
		arrayToCarton();
	}
	nuevoTurno();
}

//Siguiente turno
function nuevoTurno() {
	if (confirm("¿Seguimos jugando?")) {
		puntos -= 1;
		cuentaturnos += 1;
		cartonChecker();
	} else {
		stop();
	}
}

//Funcion fin del juego ganaste
function ganaste() {
	alert("¡Ganaste!");
	let nombre = prompt("Escribe tu nombre para guardar tu puntuación.");
	puntuaciones.push({ nombre: nombre, puntuacion: puntos });
	puntuaciones.sort((a, b) => b.puntuacion - a.puntuacion);
	console.table(puntuaciones);
	let vicio = confirm("¿Quieres jugar otra vez?");
	if (vicio) {
		location.reload();
	} else {
		stop();
	}
}

//global function
function bingo() {
	puntuaciones = [
		{ nombre: "GamerGranny", puntuacion: 80 },
		{ nombre: "AdolfoNumber1", puntuacion: 34 },
		{ nombre: "ASS", puntuacion: 69 },
		{ nombre: "Güiner", puntuacion: 1 },
		{ nombre: "Respuesta", puntuacion: 42 },
	];

	cartonPlayer = [];
	cartonArray = newCarton();
	numerosSalidos = [];
	lineaHecha = 1;
	puntos = 100;
	cuentaturnos = 0;
	numerosPartida = shuffle(range(1, 101));

	alert("Mira tu cartón en la consola.");
	arrayToCarton();
	if (confirm("¿Aceptas este cartón o quieres otro?")) {
		cartonChecker();
	} else {
		bingo();
	}
}

bingo();