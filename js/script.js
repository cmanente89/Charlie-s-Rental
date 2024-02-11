
//declaración de variables


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

//declaración de funciones
function reserva (reserva, stock, horas, saldo, precioHora){
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

alert("Gracias por utilizar nuestro servicio \n¡Hasta la próxima!");
