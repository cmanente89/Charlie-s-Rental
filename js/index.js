

// Objetoss
const bicicletas = {
    "Básica": {
        nombre: "Vairo 3.8 rodado 29",
        tipoBicicleta: "Básica",
        precioHora: 1000,
        stock: 5,
        img: "../img/vairo-3_8-29-basica.jpg"
    },
    "Premium": {
        nombre: "Specialized Rockhopper Expert rodado29",
        tipoBicicleta: "Premium",
        precioHora: 2000,
        stock: 3,
        img: "../img/specialized-rockhopper-expert-29-premium.webp",
    },
};

// Arrays
const reservas = [];

//formulario: variables y eventos
const seleccionTipo = document.getElementById("seleccion-tipo");
seleccionTipo.addEventListener("change", () => {
    const valorActual = document.getElementById("seleccion-tipo").value;
    console.log(valorActual)
    localStorage.setItem("tipoBicicleta", valorActual);
});

const seleccionCantidad = document.getElementById("seleccion-cantidad");
seleccionCantidad.addEventListener("change", function () {
    const cantidad = parseInt(seleccionCantidad.value);
    console.log("Cantidad de bicicletas:", cantidad);
    localStorage.setItem("cantidadBicicletas", cantidad);
});

const seleccionHoras = document.getElementById("seleccion-horas");//por que sin el value? ver diferencia con el anterior
seleccionHoras.addEventListener("change", () => {
    const horas = seleccionHoras.value;
    console.log(horas);
    localStorage.setItem("horasSeleccionadas", horas);
});

const botonReservar = document.getElementById("boton-reserva");

// Funcion para calcular la reserva
function calcularMontoReserva() {
    const tipoBicicleta = localStorage.getItem("tipoBicicleta");
    const bike = bicicletas[tipoBicicleta];
    const cantidad = parseInt(localStorage.getItem("cantidadBicicletas"));
    const horas = parseInt(localStorage.getItem("horasSeleccionadas"));

    // funcion de mensaje dinamico de error de stock
    const errorMessage = document.getElementById("error-message");
    if (cantidad > bike.stock) {
        errorMessage.innerHTML = "La cantidad de stock seleccionada es superior al disponible";
        return;
    }

    // si no hay error se limpia
    errorMessage.innerHTML = "";
    const total = bike.precioHora * horas * cantidad;
    const reservationNumber = Math.floor(Math.random() * 1000000); // Generate a random 6-digit number
    const reservation = {
        numero: reservationNumber,
        tipo: bike.nombre,
        cantidad,
        horas,
        saldo: total
    };
    reservas.push(reservation);

    // guardo en local storage
    localStorage.setItem("reservas", JSON.stringify(reservas));

    // detalles de la reserva se muestran dinamicamente en el html
    const reservationDetailsDiv = document.getElementById("reservation-details");
    reservationDetailsDiv.innerHTML = `
        <h3>Detalles de la Reserva</h3>
        <p>Número de Reserva: ${reservation.numero}</p>
        <p>Tipo de Bicicleta: ${reservation.tipo}</p>
        <p>Cantidad: ${reservation.cantidad}</p>
        <p>Horas: ${reservation.horas}</p>
        <p>Total: ${reservation.saldo}</p>
    `;

    console.log("Reservation details:", reservation);
    console.log("Total reservation amount:", total);
}

botonReservar.addEventListener("click", calcularMontoReserva);

//ver como hacer para que no aparezcan el error y el detalle de reserva anterior juntos

