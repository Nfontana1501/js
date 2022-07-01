let numeroComensales = parseInt(prompt("Ingrese el número de comensales"))

class Orden {
    constructor(nombre, pedido) {
        this.nombre = nombre.toUpperCase();
        this.pedido = pedido;
    }
}

if (numeroComensales !== ""){
    function pedido(){
        let ordenLista = []
        for (let i = 1; i<=numeroComensales; i++){
            let nombre = prompt (`Por favor ingrese el nombre del comensal`)
            let pedido = prompt(`Comensal ${i}, seleccione una opción escribiendo el nombre del plato elegido: \n1. Hamburguesa completa \n2. Milanesa napolitana \n3. Ñoquis a la bolognesa \n4. Pizza NY style`)

            if ((nombre != "") && (pedido != "")){
            let ordenARegistrar = new Orden(
                nombre,
                pedido,
                )
                ordenLista.push(ordenARegistrar)
            }
            else{
                alert("Usted no ingreso una opción válida")
                break
            }
        }
            
        return ordenLista
    }


    function main() {
        let pedidoFinal = pedido()

        for ( i = 0; i < pedidoFinal.length; i++){
        alert (`Hola ${pedidoFinal[i].nombre}, su selección ha sido ${pedidoFinal[i].pedido}`)
        }
        console.log(pedidoFinal)
    }
        
    main()
}
else{
    alert("por favor ingrese el número de comensales")
}