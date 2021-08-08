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

//function for if the user is not very bright
function nolisto()
{
	alert("Escribe un numero, pero con numeros, no con letras. \nTe recargo la página y vuelves a intentar esta difícil tarea.");
	location.reload()
}

//first messages
alert("Instrucciones: \n1-Introduce solo un número para hallar su raiz cuadrada.\n2-Introduce un segundo número para realizar las operaciones básicas +-x/")
var  numero1 = parseFloat(prompt('Primer número'));

//We check if the first number is an int
if (!Number.isNaN(numero1))
{

//Displaying info
alert("El primer numero es "+numero1);

//asking for the second
var numero2=prompt('Segundo número (opcional)');

//check if the second is left empty to get the sqrt of the first
if (numero2==="")
{
	alert(`La raiz cuadrada de ${numero1} es: ${(numero1**0.5)}.`);
	var arrRes=[(numero1**0.5),"no te fias de mi, eh?"];
}

//if not let empty, turn it into a float
else
{
	numero2=parseFloat(numero2)

//if its a number alright
if ((numero2) && !Number.isNaN(numero2))
{
	var arrRes=[tresDeci((numero1+numero2)),tresDeci((numero1-numero2)),tresDeci((numero1*numero2)),tresDeci((numero1/numero2)),"Mirando la consola, asi que no te fias de mi, eh?"];
	alert("El segundo segundo es "+numero2);
	alert(`${numero1} \+ ${numero2} \= ${arrRes[0]}\n
${numero1} \- ${numero2} \= ${arrRes[1]}\n
${numero1} \* ${numero2} \= ${arrRes[2]}\n
${numero1} \/ ${numero2} \= ${arrRes[3]}\n`);
}


//if second question is filled but its not an int
else
{
	nolisto()
}
}
alert("Los resultados se han almacenaco en un array. Consulta la consola para comprobarlo.");
console.log(arrRes);
}

//if the first its not an number
else
{
	nolisto()
}

