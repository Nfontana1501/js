let nombre = prompt("Por favor ingrese su nombre completo")

let opciones = prompt(`Bienvenido/a ${nombre} al sector de ventas de pases y rental del Cerro Patagonia, \n\n .Si desea continuar con su compra ingrese "SI"  \n .En caso contrario ingrese "NO`)

if ((opciones !== "") && ((opciones == "SI") || (opciones == "si") || (opciones == "NO") || (opciones == "no"))){
    while ((opciones !== "NO") && (opciones !== "no")){
        menu()
    }
} 
else {
    alert("No ha ingresado una opción válida")
}

function menu(){
    let menu = parseInt(prompt('Indique que desea comprar \n\n 1. Pases de esqui \n 2. Pases peaton \n 3. Rental \n 4. Salir'))

    switch (menu){
        case 1:
            ski()
            break

        case 2: 
            peaton()
            break

        case 3:
            rental()
            break

        case 4:
            alert("Usted decidió salir")
            opciones = no
            break

        default:
            alert("No ingreso una selección válida");
            menu()
            break   
    }
}

function ski(){
    let menuSki = parseInt(prompt(`Seleccione una de las siguientes opciones \n\n 1. Pase 1 día - ($1000)\n 2. Pase 2 días - ($1900)\n 3. Pase 4 días - ($3700)\n 4. Pase 7 días - ($6000)`))
    
    switch (menuSki){
        case 1:
            alert("Usted seleccionó la opción 1: Pase 1 día")
            pagar()
            break

        case 2: 
            alert("Usted seleccionó la opción 2: Pase 2 días")
            pagar()
            break

        case 3:
            alert("Usted seleccionó la opción 3: Pase 4 días")
            pagar()
            break

        case 4:
            alert("Usted seleccionó la opción 4: Pase 7 días")
            pagar()
            break

        default:
            alert("No ingreso una selección válida");
            ski()
            break   
    }
}

function peaton(){
    let menuPeaton = parseInt(prompt(`Seleccione una de las siguientes opciones \n\n 1. Pase 1 día - ($200)\n 2. Pase 2 días - ($380)\n 3. Pase 4 días - ($750)\n 4. Pase 7 días - ($1300)`))
    
    switch (menuPeaton){
        case 1:
            alert("Usted seleccionó la opción 1: Pase 1 día")
            pagar()
            break

        case 2: 
            alert("Usted seleccionó la opción 2: Pase 2 días")
            pagar()
            break

        case 3:
            alert("Usted seleccionó la opción 3: Pase 4 días")
            pagar()
            break

        case 4:
            alert("Usted seleccionó la opción 4: Pase 7 días")
            pagar()
            break

        default:
            alert("No ingreso una selección válida");
            peaton()
            break   
    }
}

function rental(){
    let menuRental = parseInt(prompt(`Seleccione una de las siguientes opciones \n\n 1. Equipamento de Ski - ($2000)\n 2. Equipamento de snowboard - ($2500)\n 3. Equipo de seguridad personal - ($1000)\n 4. Ropa de nieve - ($1750)`))

    switch (menuRental){
        case 1:
            alert("Usted seleccionó la opción 1: Equipamento de ski")
            pagar()
            break

        case 2: 
            alert("Usted seleccionó la opción 2: Equipamento de snowboard")
            pagar()
            break

        case 3:
            alert("Usted seleccionó la opción 3: Equipo de seguridad personal")
            pagar()
            break

        case 4:
            alert("Usted seleccionó la opción 4: Ropa de nieve")
            pagar()
            break

        default:
            alert("No ingreso una selección válida");
            rental()
            break   
    }
}

function pagar(){
    let pago = parseInt(prompt("Elija su medio de pago:\n\n 1. Efectivo / Transferencia\n 2. Tarjeta de débito\n 3. Tarjeta de crédito \n\n El pago en efectivo o transferencia, tiene un 10% de descuento\n El pago con tarjeta de crédito, tiene un 5% de recargo"))

    switch (pago){
        case 1:
            alert('Usted tiene un 10% de descuento')
            let monto1 = parseFloat(prompt("Ingrese el precio del producto seleccionado"))
            let total1 = monto1 * 0.9
            alert(`Su pago es de: ${total1}`)
            break

        case 2: 
            alert('Usted no tiene descuento')
            let monto2 = parseFloat(prompt("Ingrese el precio del producto seleccionado"))
            let total2 = monto2 * 1
            alert(`Su pago es de: ${total2}`)
            break

        case 3:
            alert('Usted tiene un 5% de recargo')
            let monto3 = parseFloat(prompt("Ingrese el precio del producto seleccionado"))
            let total3 = monto3 * 1.05
            alert(`Su pago es de: ${total3}`)
            break

        default:
            alert("No ingreso una selección válida")
            pagar()
            break   
    }
}