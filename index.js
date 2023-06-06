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
const IVA = .19;
let totalDeProducto = 100

const verProductos = () =>{
    let opcion;
    opcion = parseInt(prompt(nombrePersona + " " + "elige la acción que deseas realizar, \n 1.Ver collares \n 2.Ver placas \n 3.Regresar a pagina anterior. \n 4.Salir"));
    while(opcion !== OPCION_SALIR){
        switch(opcion){
            case 1: verCollares();
                break;
            case 2: verPlacas();
                    break;
            case 3: regresar();
                    break;
            case 4:
                    break;
            default:
                alert("Acción no reconocida, intentalo de nuevo")
        }
    }
}

const verTotal = (total) =>{
    const resultado = IVA + totalDeProducto;
    alert("El total de los productos más IVA es " + resultado)

}
   

let opcion = parseInt(prompt(nombrePersona + " " + "elige la acción que deseas realizar, \n 1.Ver nuestros productos \n 2.Ver el valor total del carrito de compras. \n 3.Comunicarte con servicio al cliente \n 4.Salir"));

while(opcion != OPCION_SALIR){

    switch(opcion){
        case 1: verProductos();
                break;
        case 2: verTotal(totalDeProducto);
                break;
        case 3: servicioCliente();
                break;
        case 4:
                break;
        default:
            alert("Acción no reconocida, intentalo de nuevo")
    }
    opcion = parseInt(prompt(nombrePersona + "Elige la accion que deseas realizar, \n 1.Ver productos \n 2.Ver el valor total del carrito de compras. \n 3.Servicio al cliente \n 4.Salir"));
}

alert("Gracias por su visita!")