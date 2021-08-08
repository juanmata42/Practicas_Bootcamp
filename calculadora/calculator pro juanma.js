//The 3 decimal function because I hate how convoluted it has to be and it and should be placed in a dark corner and never spoken of
function tresDeci(num)
{
	if (num%1!=0)
	{
		num=parseFloat(num.toFixed(3));
		return num;
	}
	else
	{
		return num;
	}
}

//The actual code

//operators array
let operadoresposibles=["+","-","/","*","raiz"]
let numero1
let numero2
let operador

//function for if the user is not very bright
function nolisto()
{
	alert("Escribe un numero, pero con numeros, no con letras. \nVuelve a intentarlo anda.");	
}

//first number writing function, checks too

function firstnum()
{
let numero1 = parseFloat(prompt('Primer número'));
if (Number.isNaN(numero1))
{
nolisto()
firstnum()
}
else
{
	//Displaying info
alert("El primer numero es "+numero1);
return numero1;
}
}


//asking for operator and displaying
function operadorcheck()
{
	let operador=prompt("Escoge un operador de los siguientes: +, - , * , / , raiz. \nSi escoges raiz, el segundo numero será su índice.");

if (operadoresposibles.includes(operador))
{
alert("El operador escogido es "+operador);
return operador
}
else
{
	nolisto();
	operadorcheck();
}
}

//asking for the second and displaying
function secondnum()
{
let  numero2 = parseFloat(prompt('Segundo numero'));

if (Number.isNaN(numero2))
{
nolisto()
secondnum()
}
else
{
	//Displaying info
alert("El segundo numero es "+numero2);
return numero2;
}
}

//the operations

function suma(num1,num2)
{
	return tresDeci(num1+num2);
}

function resta(num1,num2)
{
	return tresDeci(num1-num2);
}

function division(num1,num2)
{
	return tresDeci((num1)/(num2));
}

function multiplicacion(num1,num2)
{
	return tresDeci(num1*num2);
}

function raiz(num1,num2)
{
	return num1**(1/num2);
}

function otravez()
{
	if (window.confirm("¿Quieres hacer otra operación?"))
	{
		location.reload()
	}
}



function calculadorapro()
{
	//Instructions
alert("Instrucciones: \n1-Introduce un numero\n2-Escoge un operador de los siguientes: +, - , * , / , raiz. Si escoges raiz, el segundo numero será su índice.\n3-Introduce otro numero\nTe devuelvo un resultado.");
	let numero1=firstnum()
	let operador=operadorcheck()
	let numero2=secondnum()

	switch(operador)
	
	{
		case "+":
		alert(`${numero1} \+ ${numero2} \= ${suma(numero1,numero2)}`);
		console.log((`${numero1} \+ ${numero2} \= ${suma(numero1,numero2)}`));
		break;
	
		case "-":
		alert(`${numero1} \- ${numero2} \= ${resta(numero1,numero2)}`);
		console.log((`${numero1} \- ${numero2} \= ${resta(numero1,numero2)}`));
		break;
		
		case "*":
		alert(`${numero1} \* ${numero2} \= ${multiplicacion(numero1,numero2)}`);
		console.log((`${numero1} \* ${numero2} \= ${multiplicacion(numero1,numero2)}`));
		break;

		case "/":
		alert(`${numero1} \/ ${numero2} \= ${division(numero1,numero2)}`);
		console.log((`${numero1} \/ ${numero2} \= ${division(numero1,numero2)}`));
		break;

		case "raiz":
		alert(`Raiz ${numero2} de ${numero1} \= ${raiz(numero1,numero2)}`);
		console.log((`Raiz ${numero2} de ${numero1} \= ${raiz(numero1,numero2)}`));
		break;
		
	}
	otravez()
}

calculadorapro()
