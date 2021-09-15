//funciones de cosas bonitas
document.getElementById("Mrebelde.png").style.display = "none";
document.getElementById("Mimperio.png").style.display = "none";
let epico = new Audio("Duel of the Fates.mp3");
let PJs = ["rebeldes.png", "rebeldes2.png", "imperio.png", "imperio2.png"]
let IAs = ["droide.png", "droide2.png", "droidemalo.png", "droidemalo2.png"]
let fichaTurno
//ending function
function end(ganador) {
    epico.pause();
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


//lo importante de verdad
/**
 * Creates an instance of Board.
 * 
 * @constructor
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
        for (let y = this.game.rows - 1; y >= 0; y--) {
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
    let human_points = 0;
    let computer_points = 0;

    // Save winning positions to arrays for later usage
    this.game.winning_array_human = [];
    this.game.winning_array_cpu = [];

    // Determine score through amount of available chips
    for (let i = 0; i < 4; i++) {
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
        if  (IAs.includes(player2.personaje)) { 
            this.game.winning_array = this.game.winning_array_human;
        // Computer won (100000) 
        return -this.game.score; } 
        else if (IAs.includes(player1.personaje)) { 
        this.game.winning_array = this.game.winning_array_cpu;
        // Computer won (100000)
        //este menos hace que quiera hace 4 en raya
            return this.game.score; }

    } else if (computer_points == 4) {
        if  (IAs.includes(player2.personaje)) {
        this.game.winning_array = this.game.winning_array_cpu;
        // Human won (-100000)
        return this.game.score; } 

        else if (IAs.includes(player1.personaje)) { 
            this.game.winning_array = this.game.winning_array_human;
            //si quito este menos se vuelve tonta
            return this.game.score; }

    } else {
        // Return normal points
        if  (IAs.includes(player2.personaje)) { return computer_points; } 
        else if (IAs.includes(player1.personaje)) { return human_points; }
        
    }
}

/**
 * Returns the overall score for our board.
 *
 * @return {number}
 */
Board.prototype.score = function() {
    let points = 0;

    let vertical_points = 0;
    let horizontal_points = 0;
    let diagonal_points1 = 0;
    let diagonal_points2 = 0;

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
    for (let row = 0; row < this.game.rows - 3; row++) {
        // Für jede Column überprüfen
        for (let column = 0; column < this.game.columns; column++) {
            // Die Column bewerten und zu den Punkten hinzufügen
            let score = this.scorePosition(row, column, 1, 0);
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
    for (let row = 0; row < this.game.rows; row++) {
        for (let column = 0; column < this.game.columns - 3; column++) {
            let score = this.scorePosition(row, column, 0, 1);
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
    for (let row = 0; row < this.game.rows - 3; row++) {
        for (let column = 0; column < this.game.columns - 3; column++) {
            let score = this.scorePosition(row, column, 1, 1);
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
    for (let row = 3; row < this.game.rows; row++) {
        for (let column = 0; column <= this.game.columns - 4; column++) {
            let score = this.scorePosition(row, column, -1, +1);
            if (score == this.game.score) return this.game.score;
            if (score == -this.game.score) return -this.game.score;
            diagonal_points2 += score;
        }

    }

    points = horizontal_points + vertical_points + diagonal_points1 + diagonal_points2;
    if  (IAs.includes(player2.personaje)) { return points; } 
    else if (IAs.includes(player1.personaje)) { return -(points) }
    
}

/**
 * Determines if board is full.
 *
 * @return {boolean}
 */
Board.prototype.isFull = function() {
    for (let i = 0; i < this.game.columns; i++) {
        if (this.field[0][i] == null) {
            return false;
        }
    }
    return true;
}

/**
 * Returns a copy of our board.
 *
 * @return {Board}
 */
Board.prototype.copy = function() {
    let new_board = new Array();
    for (let i = 0; i < this.field.length; i++) {
        new_board.push(this.field[i].slice());
    }
    return new Board(this.game, new_board, this.player);
}



/**
 * Minimax (+Alpha-Beta) Implementation 
 * @plain javascript version
 */
function Game() {
    this.rows = 6; // Height
    this.columns = 7; // Width
    this.status = 0; // 0: running, 1: won, 2: lost, 3: tie
    this.depth = 4; // Search depth
    this.score = 100000, // Win/loss score
        this.round = 0; // 0: Human, 1: Computer
    this.winning_array = []; // Winning (chips) array
    this.iterations = 0; // Iteration count

    that = this;

    that.init();
}

Game.prototype.init = function() {
    // Generate 'real' board
    // Create 2-dimensional array
    let game_board = new Array(that.rows);
    for (let i = 0; i < game_board.length; i++) {
        game_board[i] = new Array(that.columns);

        for (let j = 0; j < game_board[i].length; j++) {
            game_board[i][j] = null;
        }
    }

    // Create from board object (see board.js)
    this.board = new Board(this, game_board, 0);

    // Generate visual board
    game_board = "";
    for (let i = 0; i < that.rows; i++) {
        game_board += "<tr>";
        for (let j = 0; j < that.columns; j++) {
            game_board += `<td class='empty col${j}'></td>`;
        }
        game_board += "</tr>";
    }

    document.getElementById('game_board').innerHTML = game_board;

    // Action listeners
    let td = document.getElementById('game_board').getElementsByTagName("td");

    for (let i = 0; i < td.length; i++) {
        if (td[i].addEventListener) {
            td[i].addEventListener('click', that.act, false);
        } else if (td[i].attachEvent) {
            td[i].attachEvent('click', that.act)
        }
    }
    document.getElementsByClassName('col0').classHighlight('lightsaber');
    document.getElementsByClassName('col1').classHighlight('lightsaber');
    document.getElementsByClassName('col2').classHighlight('lightsaber');
    document.getElementsByClassName('col3').classHighlight('lightsaber');
    document.getElementsByClassName('col4').classHighlight('lightsaber');
    document.getElementsByClassName('col5').classHighlight('lightsaber');
    document.getElementsByClassName('col6').classHighlight('lightsaber');

}

//player seleccionadores  qwerty  solo funciona de momento si eres pj y el segundo es robot
let players = 0
let player1 = {}
let player2 = {}

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
        that.depth = 6
    } else if (seleccion.id === "droidemalo.png") {
        document.getElementById("droidemalo2.png").disabled = true;
        document.getElementById("droidemalo2.png").classList.replace("botonesSelectores", "noSeleccion")
        that.depth = 4
    }
    players += 1
    if (players === 2) {
        // qwerty  cuando terminemos epico.play()
        fichaTurno = player1.personaje
        //qwerty como llama a la IA para que juegue primero??
        if (fichaTurno === "droide.png" || fichaTurno === "droidemalo.png") { that.generateComputerDecision() }
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
        that.depth = 6
    } else if (seleccion.id === "droidemalo2.png") {
        document.getElementById("droidemalo.png").disabled = true;
        document.getElementById("droidemalo.png").classList.replace("botonesSelectores", "noSeleccion")
        that.depth = 4
    }
    players += 1
    if (players === 2) {
        // qwerty  cuando terminemos epico.play()
        fichaTurno = player1.personaje
        //qwerty como llama a la IA para que juegue primero??
        if (fichaTurno === "droide.png" || fichaTurno === "droidemalo.png") { that.generateComputerDecision() }
    }
}

/**
 * On-click event
 */
Game.prototype.act = function(e) {
    let element = e.target || window.event.srcElement;
    if (players === 2) {
        // Human round
        if (that.round == 0) {
            if (PJs.includes(player1.personaje)) { 
                that.place(element.cellIndex);
                if  (IAs.includes(player2.personaje)) { 
                    that.generateComputerDecision() } 
                } else if (IAs.includes(player1.personaje)) { 
                    that.generateComputerDecision() }
        }

        // Computer round 
        else if (that.round == 1) {
            if (PJs.includes(player2.personaje)) { 
                that.place(element.cellIndex) 
                if (IAs.includes(player1.personaje)) { 
                    that.generateComputerDecision() 
                }
            }
        }
    }
}

Game.prototype.place = function(column) {
    // If not finished
    if (that.board.score() != that.score && that.board.score() != -that.score && !that.board.isFull()) {
        for (let y = that.rows - 1; y >= 0; y--) {
            if (document.getElementById('game_board').rows[y].cells[column].classList.contains('empty')) {
                if (that.round == 1) {
                    document.getElementById('game_board').rows[y].cells[column].classList.remove('empty');
                    document.getElementById('game_board').rows[y].cells[column].classList.add('coin', 'cpu-coin');
                    let img = document.createElement("img");
                    img.src = player2.personaje;
                    document.getElementById('game_board').rows[y].cells[column].appendChild(img);
                } else {
                    document.getElementById('game_board').rows[y].cells[column].classList.remove('empty');
                    document.getElementById('game_board').rows[y].cells[column].classList.add('coin', 'human-coin');
                    let img = document.createElement("img");
                    img.src = player1.personaje;
                    document.getElementById('game_board').rows[y].cells[column].appendChild(img);
                }
                break;
            }
        }

        if (!that.board.place(column)) {
            return alert("Invalid move!");
        }


        that.round = that.switchRound(that.round);
        that.updateStatus();
    }
}

Game.prototype.generateComputerDecision = function() {
    if  (IAs.includes(player2.personaje)) {
    if (that.board.score() != that.score && that.board.score() != -that.score && !that.board.isFull()) {
        that.iterations = 0; // Reset iteration count

        // AI is thinking
        players = 1
        setTimeout(function() {
            // Algorithm call
            let ai_move = that.maximizePlay2(that.board, that.depth);
            // Place ai decision
            that.place(ai_move[0]);
            
        }, 500);
        players = 2
    }
}
    else if (IAs.includes(player1.personaje)) {
    if (that.board.score() != that.score && that.board.score() != -that.score && !that.board.isFull()) {
        that.iterations = 0; // Reset iteration count

        // AI is thinking
        players = 1
        setTimeout(function() {
            // Algorithm call
            let ai_move = that.maximizePlay1(that.board, that.depth);
            // Place ai decision
            that.place(ai_move[0]);            
        }, 500);
        players = 2
    }
} 
}

/**
 * Algorithm
 * Minimax principle
 */
//if AI is player 1
Game.prototype.maximizePlay1 = function(board, depth, alpha, beta) {
    // Call score of our board
    let score = board.score();

    // Break
    if (board.isFinished(depth, score)) return [null, score];

    // Column, Score
    let max = [null, -99999];

    // For all possible moves
    for (let column = 0; column < that.columns; column++) {
        let new_board = board.copy(); // Create new board

        if (new_board.place(column)) {

            that.iterations++; // Debug

            let next_move = that.minimizePlay1(new_board, depth - 1, alpha, beta); // Recursive calling

            // Evaluate new move
            if (max[0] == null || next_move[1] > max[1]) {
                max[0] = column;
                max[1] = next_move[1];
                alpha = next_move[1];
            }

            if (alpha >= beta) return max;
        }
    }

    return max;
}

Game.prototype.minimizePlay1 = function(board, depth, alpha, beta) {
    let score = board.score();

    if (board.isFinished(depth, score)) return [null, score];

    // Column, score
    let min = [null, 99999];

    for (let column = 0; column < that.columns; column++) {
        let new_board = board.copy();

        if (new_board.place(column)) {

            that.iterations++;

            let next_move = that.maximizePlay1(new_board, depth - 1, alpha, beta);

            if (min[0] == null || next_move[1] < min[1]) {
                min[0] = column;
                min[1] = next_move[1];
                beta = next_move[1];
            }

            if (alpha >= beta) return min;

        }
    }
    return min;
}
 //if AI is player 2
Game.prototype.maximizePlay2 = function(board, depth, alpha, beta) {
    // Call score of our board
    let score = board.score();

    // Break
    if (board.isFinished(depth, score)) return [null, score];

    // Column, Score
    let max = [null, -99999];

    // For all possible moves
    for (let column = 0; column < that.columns; column++) {
        let new_board = board.copy(); // Create new board

        if (new_board.place(column)) {

            that.iterations++; // Debug

            let next_move = that.minimizePlay2(new_board, depth - 1, alpha, beta); // Recursive calling

            // Evaluate new move
            if (max[0] == null || next_move[1] > max[1]) {
                max[0] = column;
                max[1] = next_move[1];
                alpha = next_move[1];
            }

            if (alpha >= beta) return max;
        }
    }

    return max;
}

Game.prototype.minimizePlay2 = function(board, depth, alpha, beta) {
    let score = board.score();

    if (board.isFinished(depth, score)) return [null, score];

    // Column, score
    let min = [null, 99999];

    for (let column = 0; column < that.columns; column++) {
        let new_board = board.copy();

        if (new_board.place(column)) {

            that.iterations++;

            let next_move = that.maximizePlay2(new_board, depth - 1, alpha, beta);

            if (min[0] == null || next_move[1] < min[1]) {
                min[0] = column;
                min[1] = next_move[1];
                beta = next_move[1];
            }

            if (alpha >= beta) return min;

        }
    }
    return min;
}

Game.prototype.switchRound = function(round) {
    // 0 Human, 1 Computer
    if (round == 0) {
        document.getElementById("Mrebelde.png").style.display = "none";
      document.getElementById("Mimperio.png").style.display = "none";
      if (PJs.includes(player2.personaje))
        {mouseFollower(player2.cursor)}
      fichaTurno = player2.personaje
        return 1;
    } else {
        document.getElementById("Mrebelde.png").style.display = "none";
      document.getElementById("Mimperio.png").style.display = "none";
      if (PJs.includes(player1.personaje))
        {mouseFollower(player1.cursor)}
      fichaTurno = player1.personaje
        return 0;
    }
}

Game.prototype.updateStatus = function() {
    // Human won
    if (that.board.score() == -that.score) {
        that.status = 1;
        that.markWin();
        end(player1.personaje);
    }

    // Computer won
    if (that.board.score() == that.score) {
        that.status = 2;
        that.markWin();
        end(player2.personaje);
    }

    // Tie
    if (that.board.isFull()) {
        that.status = 3;
        end("empate");
    }


}

Game.prototype.markWin = function() {
    document.getElementById('game_board').className = "finished";
    for (let i = 0; i < that.winning_array.length; i++) {
        let name = document.getElementById('game_board').rows[that.winning_array[i][0]].cells[that.winning_array[i][1]].className;
        document.getElementById('game_board').rows[that.winning_array[i][0]].cells[that.winning_array[i][1]].className = name + " win";
    }
}

Game.prototype.restartGame = function() {
    location.reload();
}

/**
 * Start game
 */
function Start() {
    window.Game = new Game();
}

window.onload = function() {
    Start()
};