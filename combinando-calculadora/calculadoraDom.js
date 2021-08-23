// Limpia la pantalla
function AC() {
    document.getElementById("resultado").innerText = "";
    secreto = "";
}

// Escribe lo pulsado
function display(value) {
    if (
        document.getElementById("resultado").innerText.length < 8 ||
        document.getElementById("resultado").innerText === ""
    ) {
        document.getElementById("resultado").innerText += value;
    }
}

//Array de la operacion
let secreto = "";
//funciones operaciones
function operador(value) {
    secreto = document.getElementById("resultado").innerText;
    document.getElementById("resultado").innerText = "";
    switch (value) {
        case "+":
            secreto += "+";
            break;

        case "-":
            secreto += "-";
            break;

        case "/":
            secreto += "/";
            break;

        case "*":
            secreto += "*";
            break;

        case "**":
            secreto += "**";
            break;

        case "**1/":
            secreto += "**(1/";
            break;
    }
}
//funcion de igual
function calcular() {
    secreto += document.getElementById("resultado").innerText;
    //por si usas una raiz, cerramos el paréntesis del exponente y damos el error si es raiz de numero imaginario
    if (secreto.includes("**(1/")) {
        secreto += ")";
        if (secreto[0] === "-") {
            document.getElementById("resultado").innerText = "E i=√-1";
        }
    }
    //pasamos por eval para cambiar el secreto por un resultado
    let todoHecho = eval(secreto);
    //si el resultado es menor de 8 caracteres, cabe en la pantalla
    if (todoHecho.toString().length <= 8) {
        document.getElementById("resultado").innerText = todoHecho;
        secreto = todoHecho;
        //si el resultado no cabe en la pantalla, se pasa a notación científica y se ajusta para que quepa
    } else if (todoHecho.toString().length > 8) {
        document.getElementById("resultado").innerText =
            parseFloat(todoHecho).toExponential(3);
        if (
            document.getElementById("resultado").innerText.toString().length > 8
        ) {
            document.getElementById("resultado").innerText = "TOO-BIG";
        }
        secreto = todoHecho;
    }
}