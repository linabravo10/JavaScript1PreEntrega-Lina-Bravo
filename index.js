let nombrePersona = prompt("Por favor ingresar su nombre.")

if (nombrePersona =="" || nombrePersona == "." || nombrePersona == " "){
    alert("No ingresaste tu nombre, por favor intentalo de nuevo");

    nombrePersona = prompt("Por favor ingresar su nombre.")
}
else {
    alert("Bienvenido/a" + " " + nombrePersona)
}

console.log(nombrePersona)

const OPCION_SALIR = 4;

let opcion = parseInt(prompt(nombrePersona + " " + "elige la acción que deseas realizar, \n 1.Ver nuestros productos \n 2.Ver nuestros servicios \n 3.Comunicarte con servicio al cliente \n 4.Salir"));

while(opcion != OPCION_SALIR){

    switch(opcion){
        case 1: verProductos();
                break;
        case 2: verServicios();
                break;
        case 3: servicioCliente();
                break;
        case 4:
                break;
        default:
            alert("Acción no reconocida, intentalo de nuevo")
    }
    opcion = parseInt(prompt(nombrePersona + "Elige la accion que deseas realizar, \n 1.Ver productos \n 2.Ver nuestros servicios \n 3.Servicio al cliente \n 4.Salir"));
}

alert("Gracias por su visita!")