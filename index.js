const pasesSki = [
    {nombre: "Pase ski un día", valor : 1000},
    {nombre: "Pase ski dos días", valor : 1900},
    {nombre: "Pase ski cuatro días", valor : 3700},
    {nombre: "Pase ski siete días", valor : 6000}
]

const pasesPeaton = [
    {nombre: "Pase peatón un día", valor : 200},
    {nombre: "Pase peatón dos días", valor : 380},
    {nombre: "Pase peatón cuatro días", valor : 750},
    {nombre: "Pase peatón siete días", valor : 1300}
]

const equipos = [
    {nombre: "Equipo de ski", valor : 2000},
    {nombre: "Equipo de snowboard", valor : 2500},
    {nombre: "Equipo de protección personal", valor : 1000},
    {nombre: "Ropa de nieve", valor : 1750}
]

const pases = pasesSki.concat(pasesPeaton)

const productosTotales = pases.concat(equipos)

let contenedorlista = document.getElementById("container__lista")
let contenedorRecibo = document.getElementById("container__recibo")

let nombreUsuario = prompt("Por favor ingrese su nombre completo")
let numeroServicios = prompt(`Bienvenido/a ${nombreUsuario} al sector de ventas de pases y rental del Cerro Patagonia, en esta sección encontrará los siguiente servicios disponibles: \n\n. Pases de Ski \n. Pases de peaton \n. Rental de equipamento y ropa de nieve \n\nPor favor indique (escribiendo el número) la cantidad de servicios que desea contratar`)


class Servicio {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

if ((numeroServicios !== "") && (nombreUsuario !== "")){
    function main() {

            let pedidoFinal = pedido()
            console.log(pedidoFinal)

            condicionMain: 
            if (pedidoFinal.length > 0){

                for (const item of pedidoFinal) {
                    let itemLista = document.createElement("li")
                    itemLista.innerHTML = `<b>Nombre del servicio contratado:</b> ${item.nombre}  -  <b>Precio del servicio contratado:</b> $${item.precio}`
                    contenedorlista.appendChild(itemLista)
                }

                let precioFinal = pedidoFinal.reduce((acumulador, elemento) => acumulador + elemento.precio, 0)
                let recibo = document.createElement("h4")
                    recibo.innerHTML = `<b>El valor total de los servicios contratados es de:</b> $${precioFinal}`
                    contenedorRecibo.appendChild(recibo)

                formaPago(precioFinal)
            }
            else {
                break condicionMain
            }
    }
        
    main()
}
else {
    alert("Por favor ingrese su nombre completo y la cantidad de servicios que desea contratar")
}

function pedido(){
    let serviciosLista = []
    let servicioARegistrar = 0

    buclePedido: 
    for (let i = 1; i<=numeroServicios; i++){
        let nombreServicio = parseInt(prompt(`Seleccione que tipo de servicio desea adquirir \n\n1. Pases de ski \n2. Pases de peatón \n3. Rental \n4. Salir`))

        switch (nombreServicio){
            case 1: 
                ski()
                    servicioARegistrar = new Servicio(
                    nombre,
                    precio,
                    )
                serviciosLista.push(servicioARegistrar)
                break

            case 2:
                peaton()
                    servicioARegistrar = new Servicio(
                    nombre,
                    precio,
                    )
                serviciosLista.push(servicioARegistrar)
                break
            
            case 3:
                rental()
                    servicioARegistrar = new Servicio(
                    nombre,
                    precio,
                    )
                serviciosLista.push(servicioARegistrar)
                break

            case 4:
                serviciosLista = []
                alert("Usted ha decidido salir, gracias por visitar el sector de ventas del cerro patagonia")
                break buclePedido

            default:
                alert ("Usted no ha ingresado una opción válida")
                break
        }
    }
    return serviciosLista
}


function ski() {

    let menuSki = parseInt(prompt(`Seleccione una de las siguientes opciones \n\n 1. Pase 1 día - ($1000)\n 2. Pase 2 días - ($1900)\n 3. Pase 4 días - ($3700)\n 4. Pase 7 días - ($6000)`))

    switch (menuSki) {
        case 1:
            alert("Usted seleccionó la opción 1: Pase 1 día")
            nombre = productosTotales[0].nombre
            precio = productosTotales[0].valor
            return nombre, precio

        case 2:
            alert("Usted seleccionó la opción 2: Pase 2 días")
            nombre = productosTotales[1].nombre
            precio = productosTotales[1].valor
            return nombre, precio

        case 3:
            alert("Usted seleccionó la opción 3: Pase 4 días")
            nombre = productosTotales[2].nombre
            precio = productosTotales[2].valor
            return nombre, precio

        case 4:
            alert("Usted seleccionó la opción 4: Pase 7 días")
            nombre = productosTotales[3].nombre
            precio = productosTotales[3].valor
            return nombre, precio

        default:
            alert("No ingreso una selección válida");
            ski()
            break
    }
}

function peaton() {

    let menuPeaton = parseInt(prompt(`Seleccione una de las siguientes opciones \n\n 1. Pase 1 día - ($200)\n 2. Pase 2 días - ($380)\n 3. Pase 4 días - ($750)\n 4. Pase 7 días - ($1300)`))

    switch (menuPeaton) {
        case 1:
            alert("Usted seleccionó la opción 1: Pase 1 día")
            nombre = productosTotales[4].nombre
            precio = productosTotales[4].valor
            return nombre, precio

        case 2:
            alert("Usted seleccionó la opción 2: Pase 2 días")
            nombre = productosTotales[5].nombre
            precio = productosTotales[5].valor
            return nombre, precio

        case 3:
            alert("Usted seleccionó la opción 3: Pase 4 días")
            nombre = productosTotales[6].nombre
            precio = productosTotales[6].valor
            return nombre, precio

        case 4:
            alert("Usted seleccionó la opción 4: Pase 7 días")
            nombre = productosTotales[7].nombre
            precio = productosTotales[7].valor
            return nombre, precio

        default:
            alert("No ingreso una selección válida");
            peaton()
            break
    }
}

function rental() {

    let menuRental = parseInt(prompt(`Seleccione una de las siguientes opciones \n\n 1. Equipamento de Ski - ($2000)\n 2. Equipamento de snowboard - ($2500)\n 3. Equipo de seguridad personal - ($1000)\n 4. Ropa de nieve - ($1750)`))

    switch (menuRental) {
        case 1:
            alert("Usted seleccionó la opción 1: Equipamento de ski")
            nombre = productosTotales[8].nombre
            precio = productosTotales[8].valor
            return nombre, precio

        case 2:
            alert("Usted seleccionó la opción 2: Equipamento de snowboard")
            nombre = productosTotales[9].nombre
            precio = productosTotales[9].valor
            return nombre, precio

        case 3:
            alert("Usted seleccionó la opción 3: Equipo de seguridad personal")
            nombre = productosTotales[10].nombre
            precio = productosTotales[10].valor
            return nombre, precio

        case 4:
            alert("Usted seleccionó la opción 4: Ropa de nieve")
            nombre = productosTotales[11].nombre
            precio = productosTotales[11].valor
            return nombre, precio

        default:
            alert("No ingreso una selección válida");
            rental()
            break
    }
}

function valorProducto(producto, formaPago){
    return parseInt(producto * formaPago)
}

function formaPago(precioFinal) {
    let medioPago = parseInt(prompt("Elija su medio de pago:\n\n 1. Efectivo / Transferencia\n 2. Tarjeta de débito\n 3. Tarjeta de crédito \n\n El pago en efectivo o transferencia, tiene un 10% de descuento\n El pago con tarjeta de crédito, tiene un 5% de recargo"))

    switch (medioPago) {
        case 1:
            alert('Usted tiene un 10% de descuento')
            let pagoEfectivo = 0.9
            alert(`Su pago es de: ${valorProducto(precioFinal, pagoEfectivo)}`)
            break

        case 2:
            alert('Usted no tiene descuento')
            let pagoDebito = 1.0
            alert(`Su pago es de: ${valorProducto(precioFinal, pagoDebito)}`)
            break

        case 3:
            alert('Usted tiene un 5% de recargo')
            let pagoCredito = 1.05
            alert(`Su pago es de: ${valorProducto(precioFinal, pagoCredito)}`)
            break

        default:
            alert("No ingreso una selección válida")
            pagar()
            break
    }
}