let horario = parseInt(prompt("Bienvenido al sistema de asignación automática de turnos, por favor seleccione su preferencia horaria: \n 1. 08.00hs-12.00hs \n 2. 12.00hs-16.00hs \n 3. 16.00hs-20.00hs \n \n Tenga en cuenta que solo se asignaran 10 turnos por rango horario"))

/*if (horario === 1){
    for(let i = 1; i<=10; i++){
        let nombre = prompt("Ingrese su nombre")
        let apellido = prompt("Ingrese su apellido")
        let result = i
        alert(`Bienvenido/a ${nombre} ${apellido}, al sistema de asignación automática de turnos, su turno es el N°: ${result}`)
    }
} else if (horario === 2){
    for(let i = 11; i<=20; i++){
        let nombre = prompt("Ingrese su nombre")
        let apellido = prompt("Ingrese su apellido")
        let result = i
        alert(`Bienvenido/a ${nombre} ${apellido}, al sistema de asignación automática de turnos, su turno es el N°: ${result}`)
    }
} else if (horario === 3){
    for(let i = 21; i<=30; i++){
        let nombre = prompt("Ingrese su nombre")
        let apellido = prompt("Ingrese su apellido")
        let result = i
        alert(`Bienvenido/a ${nombre} ${apellido}, al sistema de asignación automática de turnos, su turno es el N°: ${result}`)
    }
} else {
    alert("No ingreso una opción válida")
}*/


    switch (horario){
        case 1:
            for(let i = 1; i<=10; i++){
                let nombre = prompt("Ingrese su nombre")
                let apellido = prompt("Ingrese su apellido")
                if ((nombre !== "") && (apellido !== "")){
                let result = i
                alert(`Bienvenido/a ${nombre} ${apellido}, al sistema de asignación automática de turnos, su turno es el N°: ${result}`)
                } else {
                alert("Para recibir su turno, debe ingresar su nombre y apellido completo")
                break;
                }
            }
            break;
        case 2:
            for(let i = 11; i<=20; i++){
                let nombre = prompt("Ingrese su nombre")
                let apellido = prompt("Ingrese su apellido")
                if ((nombre !== "") && (apellido !== "")){
                    let result = i
                    alert(`Bienvenido/a ${nombre} ${apellido}, al sistema de asignación automática de turnos, su turno es el N°: ${result}`)
                    } else {
                    alert("Para recibir su turno, debe ingresar su nombre y apellido completo")
                    break;
                    } 
            }
            break;
        case 3:
            for(let i = 21; i<=30; i++){
                let nombre = prompt("Ingrese su nombre")
                let apellido = prompt("Ingrese su apellido")
                if ((nombre !== "") && (apellido !== "")){
                    let result = i
                    alert(`Bienvenido/a ${nombre} ${apellido}, al sistema de asignación automática de turnos, su turno es el N°: ${result}`)
                    } else {  
                    alert("Para recibir su turno, debe ingresar su nombre y apellido completo")
                    break;
                    }
                }                      
            break;
        default:
            alert("No ingreso una selección válida");
            break;
    }