let numeroComensales = parseInt(prompt("Ingrese el número de comensales"))

class Orden {
    constructor(nombre, pedido) {
        this.nombre = nombre.toUpperCase();
        this.pedido = pedido;
    }
}

function pedido(){
    let orden2 = []
    for (let i = 1; i<=numeroComensales; i++){
        let nombre = prompt (`Por favor ingrese el nombre del comensal`)
        let pedido = parseInt(prompt(`Comensal ${i}, seleccione una opción: \n 1. Hamburguesa \n 2. Milanesa \n 3. Pancho \n 4. Choripan`))

        if (pedido === 1){
            alert("Usted selecciono una burger")
        } else if (pedido === 2){
            alert ("Usted selecciono una  purasangre")
        } else if (pedido === 3){
            alert("Usted selecciono un panchito")
        } else if (pedido === 4){
            alert("Ustedes selecciono un chori")
        } else {
            alert("No ingreso una opción válida")
        }

        let ordenARegistrar = new Orden(
            nombre,
            pedido,
            );
            orden2.push(ordenARegistrar);
    }
        
    return orden2
}


function main() {
    let pedidoFinal = pedido()
    console.log(pedidoFinal)
    alert(`Su orden es: \n\n${pedidoFinal[0]} \n${pedidoFinal[1]}`)
}
    
main();