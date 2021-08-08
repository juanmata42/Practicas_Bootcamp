//the BIG DATA

let flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } ];

//asks for user and greets

function userwelcome()
{
    let user=prompt("Hola. ¿Quién te toca ser hoy?");
    alert(`Bienvenida sea la persona ${user}, \nse le desea fortuna en sus futuros viajes.\n(Que se muestran en la consola)`)
    return user;
};

//Returns a message depending on the scale parameter
function escala(scale)
{
if (scale)
{
    return "hace escala."
}
else
{
    return "no hace escala."
}
};

//iterates through the array showing the sentence with each flight
function miraloquetengo()
{
    for (let i = 0; i <flights.length; i++)
    {
        console.log(`El vuelo con origen\: ${flights[i]["from"]}, y destino\: ${flights[i]["to"]} tiene un coste de ${flights[i]["cost"]}€ y ${escala(flights[i]["scale"])}`)
    }
};

//extra info given to user

//averagecost
function mediaCostes()
{
    let sumatorio=0
for (let i = 0; i <flights.length; i++)
    {
        sumatorio+=flights[i]["cost"]
    }
    return (sumatorio)/(flights.length)
};

//scale counter
function contadorEscalas()
{
    let numescalas=0
    for (let i = 0; i <flights.length; i++)
    {
        if (flights[i]["scale"])
        {
            numescalas+=1
        }   
    }
    return numescalas
};

//last 5 flights destinies
function last5D()
{
    let des5=[]
for (let i = (flights.length-5); i <flights.length; i++)
    {
        des5.push(flights[i]["to"])
    }
    return des5.join(", ")
};

//wrap up extra info 
function extrainfo()
{
    console.log("El coste medio de los vuelos es "+mediaCostes()+".")
    console.log("El número de vuelos que realizan escalas es "+contadorEscalas()+".")
    console.log("Los últimos 5 vuelos del día tienen los siguientes destinos: "+last5D()+".")
}

//general call function
function ordenPrincipal()
{
    userwelcome()
    miraloquetengo()
    extrainfo()
}

ordenPrincipal()