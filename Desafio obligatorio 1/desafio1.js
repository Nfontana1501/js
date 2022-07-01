const servicios = [
    {
        paseUnDia : 1000,
        paseDosDias : 1900,
        paseCuatroDias : 3700,
        paseSieteDias : 6000
    },

    {
        paseUnDia : 200,
        paseDosDias : 380,
        paseCuatroDias : 750,
        paseSieteDias : 1300
    },

    {
        equipoSki : 2000,
        equipoSnowboard : 2500,
        proteccionPersonal : 1000,
        ropaNieve : 1750
    }
]

function main(){
    let nombre = prompt("Por favor ingrese su nombre completo")

    let opciones = prompt(`Bienvenido/a ${nombre} al sector de ventas de pases y rental del Cerro Patagonia, \n\n .Si desea continuar con su compra ingrese "SI"  \n .En caso contrario ingrese "NO`)

    if ((opciones !== "") && ((opciones == "SI") || (opciones == "si") || (opciones == "NO") || (opciones == "no"))) {
        while ((opciones !== "NO") && (opciones !== "no")) {
            let menu = parseInt(prompt('Indique que desea comprar \n\n 1. Pases de esqui \n 2. Pases peaton \n 3. Rental \n 4. Salir'))

            if (menu === 1){
                let precio = ski()
                formaPago(precio)
            } 
            else if (menu === 2){
                let precio = peaton()
                formaPago(precio)
            }
            else if (menu === 3){
                let precio = rental()
                formaPago(precio)
            } 
            else if (menu === 4){
                alert("Usted decidió salir")
                break
            }
            else{
                alert("No ha ingresado una opción válida")
                break
            }
        }
    }
    else {
        while (opciones === ""){
            alert("No ha ingresado una opción válida")
            break
        }
    }
}

function ski() {
    const skiObj = servicios[0]

    let menuSki = parseInt(prompt(`Seleccione una de las siguientes opciones \n\n 1. Pase 1 día - ($1000)\n 2. Pase 2 días - ($1900)\n 3. Pase 4 días - ($3700)\n 4. Pase 7 días - ($6000)`))

    switch (menuSki) {
        case 1:
            alert("Usted seleccionó la opción 1: Pase 1 día")
            return skiObj.paseUnDia

        case 2:
            alert("Usted seleccionó la opción 2: Pase 2 días")
            return skiObj.paseDosDias

        case 3:
            alert("Usted seleccionó la opción 3: Pase 4 días")
            return skiObj.paseCuatroDias

        case 4:
            alert("Usted seleccionó la opción 4: Pase 7 días")
            return skiObj.paseSieteDias

        default:
            alert("No ingreso una selección válida");
            ski()
            break
    }
}

function peaton() {
    const peatonObj = servicios[1]

    let menuPeaton = parseInt(prompt(`Seleccione una de las siguientes opciones \n\n 1. Pase 1 día - ($200)\n 2. Pase 2 días - ($380)\n 3. Pase 4 días - ($750)\n 4. Pase 7 días - ($1300)`))

    switch (menuPeaton) {
        case 1:
            alert("Usted seleccionó la opción 1: Pase 1 día")
            return peatonObj.paseUnDia

        case 2:
            alert("Usted seleccionó la opción 2: Pase 2 días")
            return peatonObj.paseDosDias

        case 3:
            alert("Usted seleccionó la opción 3: Pase 4 días")
            return peatonObj.paseCuatroDias

        case 4:
            alert("Usted seleccionó la opción 4: Pase 7 días")
            return peatonObj.paseSieteDias

        default:
            alert("No ingreso una selección válida");
            peaton()
            break
    }

}

function rental() {
    const rentalObj = servicios[2]

    let menuRental = parseInt(prompt(`Seleccione una de las siguientes opciones \n\n 1. Equipamento de Ski - ($2000)\n 2. Equipamento de snowboard - ($2500)\n 3. Equipo de seguridad personal - ($1000)\n 4. Ropa de nieve - ($1750)`))

    switch (menuRental) {
        case 1:
            alert("Usted seleccionó la opción 1: Equipamento de ski")
            return rentalObj.equipoSki

        case 2:
            alert("Usted seleccionó la opción 2: Equipamento de snowboard")
            return rentalObj.equipoSnowboard

        case 3:
            alert("Usted seleccionó la opción 3: Equipo de seguridad personal")
            return rentalObj.proteccionPersonal

        case 4:
            alert("Usted seleccionó la opción 4: Ropa de nieve")
            return rentalObj.ropaNieve

        default:
            alert("No ingreso una selección válida");
            rental()
            break
    }
}

function valorProducto(producto, formaPago){
    return parseInt(producto * formaPago)
}

function formaPago(precio) {
    let medioPago = parseInt(prompt("Elija su medio de pago:\n\n 1. Efectivo / Transferencia\n 2. Tarjeta de débito\n 3. Tarjeta de crédito \n\n El pago en efectivo o transferencia, tiene un 10% de descuento\n El pago con tarjeta de crédito, tiene un 5% de recargo"))

    switch (medioPago) {
        case 1:
            alert('Usted tiene un 10% de descuento')
            let pagoEfectivo = 0.9
            alert(`Su pago es de: ${valorProducto(precio, pagoEfectivo)}`)
            break

        case 2:
            alert('Usted no tiene descuento')
            let pagoDebito = 1.0
            alert(`Su pago es de: ${valorProducto(precio, pagoDebito)}`)
            break

        case 3:
            alert('Usted tiene un 5% de recargo')
            let pagoCredito = 1.05
            alert(`Su pago es de: ${valorProducto(precio, pagoCredito)}`)
            break

        default:
            alert("No ingreso una selección válida")
            pagar()
            break
    }
}

main()

