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
    if (user===""){user="Anónima"}
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
    console.log("El coste medio de los vuelos es "+mediaCostes()+".");
    console.log("El número de vuelos que realizan escalas es "+contadorEscalas()+".");
    console.log("Los últimos 5 vuelos del día tienen los siguientes destinos: "+last5D()+".");
};

//useradmin asker
function useradmin()
{
    let respuestas=["USER","ADMIN"]
    let tipoU=(prompt("Por favor, identifícate como USER o ADMIN")).toUpperCase()
    if (tipoU==="ADMIN")
    {
        adminchosen()
    }
    if (tipoU==="USER")
    {
        userchosen()
    }
    else
    {
        alert("No es una palabra válida.")
        useradmin()
    }
};

//If User

//funcion saca precios
function sacaprecios()
{
    let listaprecios=[]
    for (let i=0; i <flights.length; i++)
        {listaprecios.push(flights[i]["cost"])}

    return listaprecios
}
function userchosen()
{
    let listaprecios=sacaprecios()
 let ordenuser=prompt("Introduce un precio para buscar un vuelo con ese coste. \nIntroduce caro o barato para ver el vuelo que corresponda a ello.\nIntroduce comprar para adquirir un vuelo.")
        if (ordenuser==="caro")
        {
            let getMax = listaprecios.indexOf(Math.max(...listaprecios));
            alert(`Vuelo con origen\: ${flights[getMax]["from"]}, y destino\: ${flights[getMax]["to"]} tiene un coste de ${flights[getMax]["cost"]}€ y ${escala(flights[getMax]["scale"])}. Su ID es ${flights[getMax]["id"]}.`)
            console.log(`Vuelo con origen\: ${flights[getMax]["from"]}, y destino\: ${flights[getMax]["to"]} tiene un coste de ${flights[getMax]["cost"]}€ y ${escala(flights[getMax]["scale"])}. Su ID es ${flights[getMax]["id"]}.`)
            userchosen()
        }
        else if (ordenuser==="barato")
        {
            let getMin = listaprecios.indexOf(Math.min(...listaprecios));
            alert(`Vuelo con origen\: ${flights[getMin]["from"]}, y destino\: ${flights[getMin]["to"]} tiene un coste de ${flights[getMin]["cost"]}€ y ${escala(flights[getMin]["scale"])}. Su ID es ${flights[getMin]["id"]}.`)
            console.log(`Vuelo con origen\: ${flights[getMin]["from"]}, y destino\: ${flights[getMin]["to"]} tiene un coste de ${flights[getMin]["cost"]}€ y ${escala(flights[getMin]["scale"])}. Su ID es ${flights[getMin]["id"]}.`)
            userchosen()
        }
        else if (ordenuser==="comprar")
        {
            let compra=prompt("Introduce el número de ID del vuelo que deseas adquirir")
            alert(`Gracias por su compra, vuelva pronto.`)

        }
        else
        {
                ordenuser=parseInt(ordenuser)
            if (listaprecios.includes(ordenuser))
            {
                let getExact=listaprecios.indexOf(ordenuser)
                alert(`Vuelo con origen\: ${flights[getExact]["from"]}, y destino\: ${flights[getExact]["to"]} tiene un coste de ${flights[getExact]["cost"]}€ y ${escala(flights[getExact]["scale"])}. Su ID es ${flights[getMax]["id"]}.`)
                console.log(`Vuelo con origen\: ${flights[getExact]["from"]}, y destino\: ${flights[getExact]["to"]} tiene un coste de ${flights[getExact]["cost"]}€ y ${escala(flights[getExact]["scale"])}. Su ID es ${flights[getMax]["id"]}.`)
                userchosen()
            }

            else
            {
                alert("No hay ningún vuelo con ese precio o la palabra introducida no es correcta.\nVuelve a intentarlo, anda.")
                userchosen()
            }
        }      
}

//If admin

    //function create
    function siatrue(scale)
    {
        if (scale==="si")
            {
                scale=true
                return scale 
            }
            else 
                {scale=false
                    return scale}
    }
    
    function createf()
    {
  if (flights.length < 16) {
    let newFlightInput = prompt("Añade los datos del nuevo vuelo siguiendo este esquema: ID, destino, origen, coste, escala. Ejemplo: 13, Roma, La paz, 560, si").split(', ');
    if (newFlightInput) {
      const [id, to, from, price, scale] = newFlightInput;
      let newFlightObject = ({id: parseInt(id),to,from,cost: parseInt(price),scale: siatrue(scale)});
      flights.push(newFlightObject);
      adminchosen()
    }
  } else {
    alert("Hay 15 vuelos, no pueden crearse más");
    adminchosen()

    }
};



    //function delete
    function deleteflight()
    {
        if (flights.length>1)
        {
        let idToDel=parseInt(prompt("Introduce el id del vuelo que desea borrar."))

          if (flights.find((id) => id.id ==idToDel)) 
          {
            flights=flights.filter((id) => id.id !== idToDel)
            miraloquetengo()
            adminchosen()
        }
        else
        {
            alert("No es un id válido.")
            deleteflight();
            }
        }
        else{ alert("No quedan vuelos. Por favor, crea alguno o cierra el programa.")
            adminchosen()}                    
    };
   
         

function adminchosen()
{
let adminAction=prompt("Hola de nuevo, Admin. Tus opciones son:\n1-Crear vuelos, con un máximo de 15.\n2-Borrar vuelos..\nEscribe crear o borrar para flights[getMax]ar la acción.")

if (adminAction=="crear")
{
createf()
}
else if (adminAction=="borrar")
{

deleteflight()
}
else
{
    alert("Por favor, escribe una de las opciones correctamente.")
    adminchosen()
};
};

//general call function
function ordenPrincipal()
{
    userwelcome();
    miraloquetengo();
    extrainfo();
    useradmin();

};

ordenPrincipal()


