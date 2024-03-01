
//declaración de variables

/*
let opcion = "";
let stockBasicas = 5;
let stockPremium = 3;
let reservaBasicas = 0;
let reservaPremium = 0;
let precioHoraBasica = 1000;
let precioHoraPremium = 2000;
let cantidadReservada = 0;
let horasReservadas = 0;
let saldoReserva = 0;

objetos

/*const bicicletaBasica = {
    tipo: "Básica",
    precioHora: 1000,
    stock: 5,
};

const bicicletaPremium = {
    tipo: "Premium",
    precioHora: 2000,
    stock: 3,
};*/


//arrays

//const reservasBasicas = [];
//const reservasPremium = [];


//declaración de funciones
/*function reserva (reserva, stock, horas, saldo, precioHora){
        reserva = parseInt(prompt("Ingrese la cantidad de bicicletas que desea reservar:"));
        while ((reserva <= 0) || (reserva > stock)){
        alert("El stock disponible es de "+stock+" bicicletas. Por favor vuelva a intentar");
        reserva = parseInt(prompt("Ingrese la cantidad de bicicletas que desea reservar:"));        
        }
        stock -= reserva;
        horas = parseInt(prompt("Ingrese la cantidad de horas a reservar (el máximo permitido es de 8 horas)"));
        while ((horas < 1) || (horas > 8)){
            if (horas <1){
                alert("Ingrese una hora válida")
                horas = parseInt(prompt("Ingrese la cantidad de horas a reservar (el máximo permitido es de 8 horas)"));
            }else
            alert("El máximo permitido es de 8 horas");
            horas = parseInt(prompt("Ingrese la cantidad de horas a reservar (el máximo permitido es de 8 horas)"));
        }
        saldo = (reserva * horas) * precioHora; // esto podria ser una funcion dentro de una funcion? VER
        alert("Ud ha reservado "+reserva+ " bicicleta(s) por "+horas+ " horas, debe abonar $"+saldo); 
        return (reserva); //esto está bien?
}

//simulación
alert("Bienvenido/a a Charlie's Rentals \n¡El mejor rental de bicicletas!");
opcion = prompt("Seleccione una opción: \n 1)Bicicleta MTB básica \n 2)Bicicleta MTB premium \n 3)Consultar stock de bicis \n 4)Salir");
while (opcion != "4"){
    if (opcion == "1"){
        reservaBasicas = reserva(reservaBasicas, stockBasicas, horasReservadas, saldoReserva, precioHoraBasica);
        stockBasicas -= reservaBasicas;
        //console.log(reservaBasicas)
        //console.log(stockBasicas);;

    }else if (opcion == "2"){
        reservaPremium = reserva(reservaPremium, stockPremium, horasReservadas, saldoReserva, precioHoraPremium);
        stockPremium -= reservaPremium;
        //console.log(reservaPremium);
        //console.log(stockPremium);
        
    }else if (opcion == "3"){
        alert("El stock disponible es:\n Bicicletas MTB básicas: "+stockBasicas+"\n Bicicletas MTB premium "+stockPremium);
    }else{
        alert("Opción incorrecta.");
    }
    opcion = prompt("Seleccione una opción: \n 1)Bicicleta MTB básica \n 2)Bicicleta MTB premium \n 3)Consultar stock de bicis \n 4)Salir");
}

alert("Gracias por utilizar nuestro servicio \n¡Hasta la próxima!");*/


// Objetos
const bicicletas = {
    basica: {
        nombre: "Bicicleta MTB básica",
        precioHora: 1000,
        stock: 5,
    },
    premium: {
        nombre: "Bicicleta MTB premium",
        precioHora: 2000,
        stock: 3,
    },
};

// Arrays
const reservas = [];

// Función de orden superior
function reservar(bicicleta, fn) {
    const cantidad = fn(bicicleta.stock);
    if (cantidad <= 0 || cantidad > bicicleta.stock) {
        alert("El stock disponible es de " + bicicleta.stock + " bicicletas.");
        return;
    }

    bicicleta.stock -= cantidad;
    const horas = parseInt(prompt("Ingrese la cantidad de horas a reservar (el máximo permitido es de 8 horas)"));
    if (horas < 1 || horas > 8) {
        alert("Ingrese una hora válida");
        return;
    }

    const saldo = cantidad * horas * bicicleta.precioHora;
    alert(
        "Ud ha reservado " +
        cantidad +
        " bicicleta(s) " +
        bicicleta.nombre +
        " por " +
        horas +
        " horas, debe abonar $" +
        saldo
    );

    reservas.push({
        tipo: bicicleta.nombre,
        cantidad,
        horas,
        saldo,
    });
}

// Simulación
alert("Bienvenido/a a Charlie's Rentals \n¡El mejor rental de bicicletas!");

while (true) {
    const opcion = prompt("Seleccione una opción: \n 1)Bicicleta MTB básica \n 2)Bicicleta MTB premium \n 3)Consultar stock de bicis \n 4)Mostrar historial de reservas \n 5)Salir");

    switch (opcion) {
        case "1":
            reservar(bicicletas.basica, (stock) => parseInt(prompt("Ingrese la cantidad de bicicletas básicas a reservar:")));
            break;
        case "2":
            reservar(bicicletas.premium, (stock) => parseInt(prompt("Ingrese la cantidad de bicicletas premium a reservar:")));
            break;
        case "3":
            alert("El stock disponible es:\n Bicicletas MTB básicas: " + bicicletas.basica.stock + "\n Bicicletas MTB premium " + bicicletas.premium.stock);
            break;
        case "4":
            if (reservas.length === 0) {
                alert("No hay reservas registradas.");
            } else {
                for (const reserva of reservas) {
                    alert(
                        "Tipo: " +
                        reserva.tipo +
                        "\nCantidad: " +
                        reserva.cantidad +
                        "\nHoras: " +
                        reserva.horas +
                        "\nSaldo: $" +
                        reserva.saldo
                    );
                }
            }
            break;
        case "5":
            alert("Gracias por utilizar nuestro servicio \n¡Hasta la próxima!");
            break;
        default:
            alert("Opción incorrecta.");
    }

    if (opcion === "5") {
        break;
    }
}
