document.getElementById("Mrebelde.png").style.display = "none";
document.getElementById("Mimperio.png").style.display = "none";
let winstate = ["1111", "2222"]

let player1 = {}
let player2 = {}
let players = 0
let activePlayer = 1
let epico = new Audio("Duel of the Fates.mp3");
let PJs = ["rebeldes.png", "rebeldes2.png", "imperio.png", "imperio2.png"]
let IAs = ["droide.png", "droide2.png", "droidemalo.png", "droidemalo2.png"]
let fichaTurno
let jugando=true
let board = [
  [{ state: 0, element: document.getElementById("1") }, { state: 0, element: document.getElementById("2") }, { state: 0, element: document.getElementById("3") }, { state: 0, element: document.getElementById("4") }, { state: 0, element: document.getElementById("5") }, { state: 0, element: document.getElementById("6") }, { state: 0, element: document.getElementById("7") }],
  [{ state: 0, element: document.getElementById("8") }, { state: 0, element: document.getElementById("9") }, { state: 0, element: document.getElementById("10") }, { state: 0, element: document.getElementById("11") }, { state: 0, element: document.getElementById("12") }, { state: 0, element: document.getElementById("13") }, { state: 0, element: document.getElementById("14") }],
  [{ state: 0, element: document.getElementById("15") }, { state: 0, element: document.getElementById("16") }, { state: 0, element: document.getElementById("17") }, { state: 0, element: document.getElementById("18") }, { state: 0, element: document.getElementById("19") }, { state: 0, element: document.getElementById("20") }, { state: 0, element: document.getElementById("21") }],
  [{ state: 0, element: document.getElementById("22") }, { state: 0, element: document.getElementById("23") }, { state: 0, element: document.getElementById("24") }, { state: 0, element: document.getElementById("25") }, { state: 0, element: document.getElementById("26") }, { state: 0, element: document.getElementById("27") }, { state: 0, element: document.getElementById("28") }],
  [{ state: 0, element: document.getElementById("29") }, { state: 0, element: document.getElementById("30") }, { state: 0, element: document.getElementById("31") }, { state: 0, element: document.getElementById("32") }, { state: 0, element: document.getElementById("33") }, { state: 0, element: document.getElementById("34") }, { state: 0, element: document.getElementById("35") }],
  [{ state: 0, element: document.getElementById("36") }, { state: 0, element: document.getElementById("37") }, { state: 0, element: document.getElementById("38") }, { state: 0, element: document.getElementById("39") }, { state: 0, element: document.getElementById("40") }, { state: 0, element: document.getElementById("41") }, { state: 0, element: document.getElementById("42") }]
];

//connect 4 starts inactive
let botonesJuego = document.getElementById("juego").getElementsByTagName('button');

function toggleJuego(boo) {
  for (let node of botonesJuego) {
    node.disabled = boo;
    node.classList.remove("lightsaber");
  }
}
toggleJuego(true);

//mouse follower
function mouseFollower(nave) {
  let raton = document.getElementById(nave);
  raton.style.display = "block"
  document.body.style.cursor = "url(cursor_vacio.png), auto";
  let allButtons = document.getElementsByTagName("button")
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].style.cursor = "url(cursor_vacio.png), auto";;
  }
  const onMouseMove = (e) => {
    raton.style.left = e.pageX + 'px';
    raton.style.top = e.pageY + 'px';
  }
  document.addEventListener('mousemove', onMouseMove);
}

//enfasis columna

Object.prototype.classHighlight = function(over = 'over') {

  const that = [...this],

    toggleHighlight = (event) => {
      that.forEach(
        (el) => el.classList.toggle(over, event.type === 'mouseenter')
      );
    };
  that.forEach(
    (element) => {
      element.addEventListener('mouseenter', toggleHighlight);
      element.addEventListener('mouseleave', toggleHighlight);
    });
};
document.getElementsByClassName('col0').classHighlight('lightsaber');
document.getElementsByClassName('col1').classHighlight('lightsaber');
document.getElementsByClassName('col2').classHighlight('lightsaber');
document.getElementsByClassName('col3').classHighlight('lightsaber');
document.getElementsByClassName('col4').classHighlight('lightsaber');
document.getElementsByClassName('col5').classHighlight('lightsaber');
document.getElementsByClassName('col6').classHighlight('lightsaber');

//mete fichas
let fila
let columna

function meteficha(celda) {
  fila = parseInt(celda.parentElement.parentElement.classList[0].slice(-1))
  columna = parseInt(celda.classList[0].slice(-1))
  columnPlacer(columna)
}
let coordenadas

function aBonito(row, column) {
  let img = document.createElement("img");
  img.src = fichaTurno;
  //esto es mi fórmula de traductor para los id. podría ser todo más sencillo, pero ando cansado y creo que funciona.prometo currarlo más en el curso :)
  coordenadas = (column + 1 + (row * 7));
  document.getElementById(coordenadas).appendChild(img);
  document.getElementById(coordenadas).disabled = true;
}

//column checker for positioning
function columnPlacer(column) {
  for (let i = 5; i > -1; i--) {
    if (board[i][column].state === 0) {
      board[i][column].state = activePlayer
      fila = i
      columna=column
      aBonito(fila, columna)
      rowCheck()
      columnCheck()
      diagonalsCheck()
      diagonalInverseCheck()
      tieCheck()
      if (jugando){
        cambio()
      }
      break;
    }
  }
}


//cambio de jugador
function cambio() {
  if (activePlayer === 1) {
      document.getElementById("Mrebelde.png").style.display = "none";
      document.getElementById("Mimperio.png").style.display = "none";
      if (PJs.includes(player2.personaje))
        {mouseFollower(player2.cursor)}
      fichaTurno = player2.personaje
      activePlayer = 2
      if (IAs.includes(player2.personaje))
        {toggleJuego(true);iaRandomStart()}
      else{toggleJuego(false)}
    } else {
      document.getElementById("Mrebelde.png").style.display = "none";
      document.getElementById("Mimperio.png").style.display = "none";
      if (PJs.includes(player1.personaje))
        {mouseFollower(player1.cursor)}
      fichaTurno = player1.personaje
      activePlayer = 1
      if (IAs.includes(player1.personaje))
        {toggleJuego(true);iaRandomStart()}
      else{toggleJuego(false)}
  }
}
  //player seleccionadores
  function P1Selector(celda) {
    let botonesp1 = [document.getElementById("rebeldes.png"), document.getElementById("imperio.png"), document.getElementById("droide.png"), document.getElementById("droidemalo.png")]
    let seleccion = document.getElementById(celda.id);
    botones1 = botonesp1.map(cambiando => cambiando.disabled = true)
    botonesp1.splice(botonesp1.indexOf(seleccion), 1)
    botonessp1 = botonesp1.map(cambiando => cambiando.classList.replace("botonesSelectores", "noSeleccion"))
    seleccion.classList.replace("botonesSelectores", "seleccion")
    player1.personaje = seleccion.id
    if (seleccion.id === "rebeldes.png") {
      document.getElementById("rebeldes2.png").disabled = true;
      document.getElementById("rebeldes2.png").classList.replace("botonesSelectores", "noSeleccion")
      player1.cursor = "Mrebelde.png";
      mouseFollower(player1.cursor);
    } else if (seleccion.id === "imperio.png") {
      document.getElementById("imperio2.png").disabled = true;
      document.getElementById("imperio2.png").classList.replace("botonesSelectores", "noSeleccion")
      player1.cursor = "Mimperio.png";
      mouseFollower(player1.cursor);
    } else if (seleccion.id === "droide.png") {
      document.getElementById("droide2.png").disabled = true;
      document.getElementById("droide2.png").classList.replace("botonesSelectores", "noSeleccion")
    } else if (seleccion.id === "droidemalo.png") {
      document.getElementById("droidemalo2.png").disabled = true;
      document.getElementById("droidemalo2.png").classList.replace("botonesSelectores", "noSeleccion")
    }
    players += 1
    if (players === 2) {
      epico.play()
      fichaTurno = player1.personaje
      if (fichaTurno === "droide.png" || fichaTurno === "droidemalo.png") {iaRandomStart()} else { toggleJuego(false); }
    }
  }

  function P2Selector(celda) {
    let botonesp2 = [document.getElementById("rebeldes2.png"), document.getElementById("imperio2.png"), document.getElementById("droide2.png"), document.getElementById("droidemalo2.png")]
    let seleccion = document.getElementById(celda.id);
    botones2 = botonesp2.map(cambiando => cambiando.disabled = true)
    botonesp2.splice(botonesp2.indexOf(seleccion), 1)
    botonessp2 = botonesp2.map(cambiando => cambiando.classList.replace("botonesSelectores", "noSeleccion"))
    seleccion.classList.replace("botonesSelectores", "seleccion")
    player2.personaje = seleccion.id
    if (seleccion.id === "rebeldes2.png") {
      document.getElementById("rebeldes.png").disabled = true;
      document.getElementById("rebeldes.png").classList.replace("botonesSelectores", "noSeleccion")
      player2.cursor = "Mrebelde.png";
    } else if (seleccion.id === "imperio2.png") {
      document.getElementById("imperio.png").disabled = true;
      document.getElementById("imperio.png").classList.replace("botonesSelectores", "noSeleccion")
      player2.cursor = "Mimperio.png"
    } else if (seleccion.id === "droide2.png") {
      document.getElementById("droide.png").disabled = true;
      document.getElementById("droide.png").classList.replace("botonesSelectores", "noSeleccion")
    } else if (seleccion.id === "droidemalo2.png") {
      document.getElementById("droidemalo.png").disabled = true;
      document.getElementById("droidemalo.png").classList.replace("botonesSelectores", "noSeleccion")
    }
    players += 1
    if (players === 2) {
      epico.play()
      fichaTurno = player1.personaje
      if (fichaTurno === "droide.png" || fichaTurno === "droidemalo.png") {iaRandomStart()} else { toggleJuego(false); }
    }
  }


  //winstates checkers
  //rows
  function rowCheck() {

    for (let c = 0; c < board.length; c++) {
      let rowChecking = ""
      for (let i = 0; i < board[0].length; i++) {
        rowChecking += String(board[c][i].state)
      }
      if (rowChecking.includes(winstate[0])) {
        end(player1.personaje)
        jugando=false;
        break;
      } else if (rowChecking.includes(winstate[1])) {
        end(player2.personaje)
        jugando=false;
        break;
      }
    }
  }

  //columns
  function columnCheck() {

    for (let c = 0; c < board[0].length; c++) {
      let columnChecking = ""
      for (let i = 0; i < board.length; i++) {
        columnChecking += String(board[i][c].state)
      }
      if (columnChecking.includes(winstate[0])) {
        end(player1.personaje)
        jugando=false;
        break;
      } else if (columnChecking.includes(winstate[1])) {
        end(player2.personaje)
        jugando=false;
        break;
      }
    }
  }

  //diagonals
  function diagonalsCheck() {
    for (let k = 0; k <= board[0].length + board.length - 2; k++) {
      let diagonalChecking = "";
      for (let j = 0; j <= k; j++) {
        let i = k - j;
        if (i < board.length && j < board[0].length) {
          diagonalChecking += String(board[i][j].state);
        }
        if (diagonalChecking.includes(winstate[0])) {
          end(player1.personaje)
          jugando=false;
          break;
        } else if (diagonalChecking.includes(winstate[1])) {
          end(player2.personaje);
          jugando=false;
          break;
        }
      }
    }
  }

  function diagonalInverseCheck() {
    let maxLength = Math.max(board[0].length, board.length);
    let diagonalChecking
    for (let k = 0; k <= 2 * (maxLength - 1); ++k) {
      diagonalChecking = "";
      for (let y = board.length - 1; y >= 0; --y) {
        let x = k - (board.length - y);
        if (x >= 0 && x < board[0].length) {
          diagonalChecking += String(board[y][x].state);
        }
        if (diagonalChecking.includes(winstate[0])) {
          end(player1.personaje)
          jugando=false;
          break;
        } else if (diagonalChecking.includes(winstate[1])) {
          end(player2.personaje);
          jugando=false;
          break;
        }
      }

    }
  }

  //check if tie
  function tieCheck() {
    let tiechecking = ""
    for (let c = 0; c < board.length; c++) {
      for (let i = 0; i < board[0].length; i++) {
        tiechecking += String(board[c][i].state)
      }
      if (!(tiechecking.includes("0"))) {
        end("empate");
        jugando=false;
        break;
      }
    }
  }
  //ending function
  function end(ganador) {
    epico.pause();
    toggleJuego(true);
    if (ganador === "rebeldes.png" || ganador === "rebeldes2.png") {
      let fanfarria = new Audio("rebelwin.mp3");
      fanfarria.play()
      document.getElementById("fin").style.background = 'url("rebelwin.gif")';
      document.getElementById("fin").style.backgroundSize = "cover";
      document.getElementById("fin").innerHTML = "Rebels Win"
      document.getElementById("fin").style.display = "block";
    } else if (ganador === "imperio.png" || ganador === "imperio2.png") {
      let fanfarria = new Audio("imperialwin.mp3");
      fanfarria.play()
      document.getElementById("fin").style.background = 'url("imperialwin.gif")';
      document.getElementById("fin").style.backgroundSize = "cover";
      document.getElementById("fin").innerHTML = "The Empire Wins"
      document.getElementById("fin").style.display = "block";
    } else if (ganador === "droide.png" || ganador === "droide2.png") {
      let fanfarria = new Audio("droidwin.mp3");
      fanfarria.play()
      document.getElementById("fin").style.background = 'url("droidwin.gif")';
      document.getElementById("fin").style.backgroundSize = "cover";
      document.getElementById("fin").innerHTML = "R2D2 Wins"
      document.getElementById("fin").style.display = "block";
    } else if (ganador === "droidemalo.png" || ganador === "droidemalo2.png") {
      let fanfarria = new Audio("Mdroidwin.mp3");
      fanfarria.play()
      document.getElementById("fin").style.background = 'url("Mdroidwin.gif")';
      document.getElementById("fin").style.backgroundSize = "cover";
      document.getElementById("fin").innerHTML = "Droids Win"
      document.getElementById("fin").style.display = "block";
    } else if (ganador === "empate") {
      let fanfarria = new Audio("peace.mp3");
      fanfarria.play()
      document.getElementById("fin").style.background = 'url("peace.gif")';
      document.getElementById("fin").style.backgroundSize = "cover";
      document.getElementById("fin").innerHTML = "tie"
      document.getElementById("fin").style.display = "block";
    }
  }


  //restart function
  function restart() {
    location.reload();
  }

  //hasta aquí sin IA. A partir de esto, minimax con poda alpha-beta 
  //IA RANDOM

  let columnasIA = []

  function iaRandomStart() {
    columngetter();
    setTimeout(function(){randomChooser()},500);
  }

  function columngetter() {
    columnasIA=[]
    for (let c = 0; c < board[0].length; c++) {
      let columnaIA = ""
      for (let i = 0; i < board.length; i++) {
        columnaIA += String(board[i][c].state)
      }
        columnasIA.push(columnaIA)
    }
  }

  let columnaRandom
  function randomChooser() {
    columnaRandom = columnasIA[Math.floor(Math.random() * columnasIA.length)];
    let columnatry=columnasIA.indexOf(columnaRandom)
    for (let i = 0; i < columnasIA.length; i++) {
      if (columnasIA[columnatry].includes("0")) {
        columnPlacer(columnatry); break;
      }
      else{
        if (columnatry===6){columnatry=0
        } 
      else{columnatry+=1}
    }
    }
  }
  
//IA FUERTE
function IATurn(){

//comprobadores
//crea un board nuevo hipotetico o no
/* @constructor
 * @this {Board}
 * @param {Game} game The main-game object. 
 * @param {array} field The field containing our situation.
 * @param {number} player The current player.
 */
function Board(game, field, player) {
    this.game = game
    this.field = field;
    this.player = player;
}

/**
 * Determines if situation is finished.
 *
 * @param {number} depth
 * @param {number} score
 * @return {boolean}
 */
Board.prototype.isFinished = function(depth, score) {
    if (depth == 0 || score == this.game.score || score == -this.game.score || this.isFull()) {
        return true;
    }
    return false;
}

/**
 * Place in current board.
 *
 * @param {number} column
 * @return {boolean} 
 */
Board.prototype.place = function(column) {
    // Check if column valid
    // 1. not empty 2. not exceeding the board size
    if (this.field[0][column] == null && column >= 0 && column < this.game.columns) {
        // Bottom to top
        for (var y = this.game.rows - 1; y >= 0; y--) {
            if (this.field[y][column] == null) {
                this.field[y][column] = this.player; // Set current player coin
                break; // Break from loop after inserting
            }
        }
        this.player = this.game.switchRound(this.player);
        return true;
    } else {
        return false;
    }
}

/**
 * Return a score for various positions (either horizontal, vertical or diagonal by moving through our board).
 *
 * @param {number} row
 * @param {number} column
 * @param {number} delta_y
 * @param {number} delta_x
 * @return {number}
 */
Board.prototype.scorePosition = function(row, column, delta_y, delta_x) {
    var human_points = 0;
    var computer_points = 0;

    // Save winning positions to arrays for later usage
    this.game.winning_array_human = [];
    this.game.winning_array_cpu = [];

    // Determine score through amount of available chips
    for (var i = 0; i < 4; i++) {
        if (this.field[row][column] == 0) {
            this.game.winning_array_human.push([row, column]);
            human_points++; // Add for each human chip
        } else if (this.field[row][column] == 1) {
            this.game.winning_array_cpu.push([row, column]);
            computer_points++; // Add for each computer chip
        }

        // Moving through our board
        row += delta_y;
        column += delta_x;
    }

    // Marking winning/returning score
    if (human_points == 4) {
        this.game.winning_array = this.game.winning_array_human;
        // Computer won (100000)
        return -this.game.score;
    } else if (computer_points == 4) {
        this.game.winning_array = this.game.winning_array_cpu;
        // Human won (-100000)
        return this.game.score;
    } else {
        // Return normal points
        return computer_points;
    }
}

/**
 * Returns the overall score for our board.
 *
 * @return {number}
 */
Board.prototype.score = function() {
    var points = 0;

    var vertical_points = 0;
    var horizontal_points = 0;
    var diagonal_points1 = 0;
    var diagonal_points2 = 0;

    // Board-size: 7x6 (height x width)
    // Array indices begin with 0
    // => e.g. height: 0, 1, 2, 3, 4, 5

    // Vertical points
    // Check each column for vertical score
    // 
    // Possible situations
    //  0  1  2  3  4  5  6
    // [x][ ][ ][ ][ ][ ][ ] 0
    // [x][x][ ][ ][ ][ ][ ] 1
    // [x][x][x][ ][ ][ ][ ] 2
    // [x][x][x][ ][ ][ ][ ] 3
    // [ ][x][x][ ][ ][ ][ ] 4
    // [ ][ ][x][ ][ ][ ][ ] 5
    for (var row = 0; row < this.game.rows - 3; row++) {
        // Für jede Column überprüfen
        for (var column = 0; column < this.game.columns; column++) {
            // Die Column bewerten und zu den Punkten hinzufügen
            var score = this.scorePosition(row, column, 1, 0);
            if (score == this.game.score) return this.game.score;
            if (score == -this.game.score) return -this.game.score;
            vertical_points += score;
        }            
    }

    // Horizontal points
    // Check each row's score
    // 
    // Possible situations
    //  0  1  2  3  4  5  6
    // [x][x][x][x][ ][ ][ ] 0
    // [ ][x][x][x][x][ ][ ] 1
    // [ ][ ][x][x][x][x][ ] 2
    // [ ][ ][ ][x][x][x][x] 3
    // [ ][ ][ ][ ][ ][ ][ ] 4
    // [ ][ ][ ][ ][ ][ ][ ] 5
    for (var row = 0; row < this.game.rows; row++) {
        for (var column = 0; column < this.game.columns - 3; column++) { 
            var score = this.scorePosition(row, column, 0, 1);   
            if (score == this.game.score) return this.game.score;
            if (score == -this.game.score) return -this.game.score;
            horizontal_points += score;
        } 
    }



    // Diagonal points 1 (left-bottom)
    //
    // Possible situation
    //  0  1  2  3  4  5  6
    // [x][ ][ ][ ][ ][ ][ ] 0
    // [ ][x][ ][ ][ ][ ][ ] 1
    // [ ][ ][x][ ][ ][ ][ ] 2
    // [ ][ ][ ][x][ ][ ][ ] 3
    // [ ][ ][ ][ ][ ][ ][ ] 4
    // [ ][ ][ ][ ][ ][ ][ ] 5
    for (var row = 0; row < this.game.rows - 3; row++) {
        for (var column = 0; column < this.game.columns - 3; column++) {
            var score = this.scorePosition(row, column, 1, 1);
            if (score == this.game.score) return this.game.score;
            if (score == -this.game.score) return -this.game.score;
            diagonal_points1 += score;
        }            
    }

    // Diagonal points 2 (right-bottom)
    //
    // Possible situation
    //  0  1  2  3  4  5  6
    // [ ][ ][ ][x][ ][ ][ ] 0
    // [ ][ ][x][ ][ ][ ][ ] 1
    // [ ][x][ ][ ][ ][ ][ ] 2
    // [x][ ][ ][ ][ ][ ][ ] 3
    // [ ][ ][ ][ ][ ][ ][ ] 4
    // [ ][ ][ ][ ][ ][ ][ ] 5
    for (var row = 3; row < this.game.rows; row++) {
        for (var column = 0; column <= this.game.columns - 4; column++) {
            var score = this.scorePosition(row, column, -1, +1);
            if (score == this.game.score) return this.game.score;
            if (score == -this.game.score) return -this.game.score;
            diagonal_points2 += score;
        }

    }

    points = horizontal_points + vertical_points + diagonal_points1 + diagonal_points2;
    return points;
}
//este corchete cierra el turno de la IA
}