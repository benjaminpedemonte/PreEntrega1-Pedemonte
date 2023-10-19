let Nombre = prompt("Ingresa tu nombre para iniciar")

let Apellido = prompt("Ingresa tu apellido para iniciar")

let Direccion = prompt("Ingresa tu direccion para el envio")


function validarRta (texto, textoValidar) {

    if(texto.toLowerCase() == textoValidar){
        return true
    }

    return false

}

let sigue= "si"



do {
    let numero = parseFloat(prompt("Ingrese el valor de tu producto para sumar el costo del envio"))

    alert(numero + 500) 

    let rta = prompt("¿Desea ingresar otro numero?")

    if(validarRta(rta, "no") == true){
        sigue = "no"
        alert ("!!Gracias por tu compra!!, tu producto llegara en 2 semanas aprox a tu domicilio")
    }

} while(sigue == "si")