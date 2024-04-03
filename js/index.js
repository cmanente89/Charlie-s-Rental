

// Objetos
const bicicletas = {
    "Básica": {
        nombre: "Vairo 3.8 rodado 29",
        tipoBicicleta: "Básica",
        precioHora: 1000,
        stock: 15,
        img: "../img/vairo-3_8-29-basica.jpg"
    },
    "Premium": {
        nombre: "Specialized Rockhopper Expert rodado29",
        tipoBicicleta: "Premium",
        precioHora: 2000,
        stock: 10,
        img: "../img/...",
    },
};

//cargo el stock para que me aparezca en local storage de entrada

localStorage.setItem("stockBasica", bicicletas["Básica"].stock);
localStorage.setItem("stockPremium", bicicletas["Premium"].stock);

// Arrays
const reservas = [];

//variables y eventos asociados

const checkboxBasica = document.getElementById("check-basica");

checkboxBasica.addEventListener("change", function () {
    const isChecked = checkboxBasica.checked;
    localStorage.setItem("checkedbox Basica", "checked")
});

const seleccionCantidadBasica = document.getElementById("seleccion-cantidad-basica");
seleccionCantidadBasica.addEventListener("change", () => {
    const cantidad = parseInt(seleccionCantidadBasica.value);
    localStorage.setItem("cantidadBicicletasBasica", cantidad);
});

const seleccionHorasBasica = document.getElementById("seleccion-horas-basica");//por que sin el value? ver diferencia con el anterior
seleccionHorasBasica.addEventListener("change", () => {
    const horas = seleccionHorasBasica.value;
    localStorage.setItem("horasSeleccionadasBasica", horas);
});


const checkboxPremium = document.getElementById("check-premium");

checkboxPremium.addEventListener("change", function () {
    const isChecked = checkboxPremium.checked;
    localStorage.setItem("checkedbox Premium", "checked")
});

const seleccionCantidadPremium = document.getElementById("seleccion-cantidad-premium");
seleccionCantidadPremium.addEventListener("change", () => {
    const cantidad = parseInt(seleccionCantidadPremium.value);
    localStorage.setItem("cantidadBicicletasPremium", cantidad);
});

const seleccionHorasPremium = document.getElementById("seleccion-horas-premium");//por que sin el value? ver diferencia con el anterior
seleccionHorasPremium.addEventListener("change", () => {
    const horas = seleccionHorasPremium.value;
    localStorage.setItem("horasSeleccionadasPremium", horas);
});


const botonCalcular = document.getElementById("boton-calcular");
botonCalcular.addEventListener("click", () => {

})

const botonClima = document.getElementById('get-weather-btn');

//funciones


//! mi idea para utilizar asincronia es mostrar la confirmacion y los datos de la reserva con cierto retrazo mediante un alert de sweet alert
function alertaReserva(retraso) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // simulo una condicion de error para incluir el reject
            const falla = false; // cambiar a verdadero para simular un error

            if (falla) {
                reject('Falla carga del mensaje.');
            } else {
                resolve("¡Su reserva es un éxito!");
            }
        }, retraso);
    });
}

function calcularReserva() {
    const checkedboxBasica = localStorage.getItem("checkedbox Basica") === "checked";
    const cantidadBasica = parseInt(localStorage.getItem("cantidadBicicletasBasica"));
    const horasBasica = parseInt(localStorage.getItem("horasSeleccionadasBasica"));
    const checkedboxPremium = localStorage.getItem("checkedbox Premium") === "checked";
    const cantidadPremium = parseInt(localStorage.getItem("cantidadBicicletasPremium"));
    const horasPremium = parseInt(localStorage.getItem("horasSeleccionadasPremium"));

    const errorMessage = document.getElementById("error-message");

    localStorage.clear();

    if (checkedboxBasica) {
        const bikeBasica = bicicletas["Básica"];
        if (cantidadBasica > bikeBasica.stock) {
            // errorMessage.innerHTML = "La cantidad de bicicletas básicas seleccionada supera el stock disponible"; cambio el innerHTML x un sweet alert
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "La cantidad de bicicletas básicas seleccionada supera el stock disponible",
                // footer: '<a href="#">Why do I have this issue?</a>'
            });
            return;
        }
    }

    if (checkedboxPremium) {
        const bikePremium = bicicletas["Premium"];
        if (cantidadPremium > bikePremium.stock) {
            // errorMessage.innerHTML = "La cantidad de bicicletas premium seleccionada supera el stock disponible"; cambio el innerHTML x un sweet alert
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "La cantidad de bicicletas premium seleccionada supera el stock disponible",
                // footer: '<a href="#">Why do I have this issue?</a>'
            });
            return;
        }
    }

    errorMessage.innerHTML = "";

    let totalBasica = 0;
    if (checkedboxBasica) {
        const bikeBasica = bicicletas["Básica"];
        totalBasica = bikeBasica.precioHora * horasBasica * cantidadBasica;
        bikeBasica.stock -= cantidadBasica;
        localStorage.setItem("stockBasica", bikeBasica.stock);
    }

    let totalPremium = 0;
    if (checkedboxPremium) {
        const bikePremium = bicicletas["Premium"];
        totalPremium = bikePremium.precioHora * horasPremium * cantidadPremium;
        bikePremium.stock -= cantidadPremium;
        localStorage.setItem("stockPremium", bikePremium.stock);
    }

    const total = totalBasica + totalPremium;

    const reservationNumber = Math.floor(Math.random() * 900000) + 100000;
    const reservation = {
        numero: reservationNumber.toString(),//lo convierto a string para poder buscarlo luego
        tipoBasica: checkedboxBasica ? "Básica" : "",//ternario
        cantidadBasica: cantidadBasica || 0,
        horasBasica: horasBasica || 0,
        subtotalBasica: totalBasica,
        tipoPremium: checkedboxPremium ? "Premium" : "",//ternario
        cantidadPremium: cantidadPremium || 0,
        horasPremium: horasPremium || 0,
        subtotalPremium: totalPremium,
        total: total


    };

    reservas.push(reservation);
    localStorage.setItem("reservas", JSON.stringify(reservas));

    //!esta seccion cargaba en el html los datos de la reserva, la reemplacé con un alert de sweetalert
    // const reservationDetailsDiv = document.getElementById("reservation-details");
    // reservationDetailsDiv.innerHTML = `
    //     <h3>Detalles de la Reserva</h3>
    //     <p>Número de Reserva: ${reservation.numero}</p>
    //     ${checkedboxBasica ? `<p>Tipo de Bicicleta Básica: ${reservation.tipoBasica}</p>
    //     <p>Cantidad Básica: ${reservation.cantidadBasica}</p>
    //     <p>Horas Básica: ${reservation.horasBasica}</p>
    //     <p>Subtotal Básica: ${reservation.subtotalBasica}</p>` : ""}
    //     ${checkedboxPremium ? `<p>Tipo de Bicicleta Premium: ${reservation.tipoPremium}</p>
    //     <p>Cantidad Premium: ${reservation.cantidadPremium}</p>
    //     <p>Horas Premium: ${reservation.horasPremium}</p>
    //     <p>Subtotal Premium: ${reservation.subtotalPremium}</p>` : ""}
    //     <p>Total: ${reservation.total}</p>
    // `;


    alertaReserva(1500) // 1.5 segundos de retraso para el alert
        .then(adContent => {
            Swal.fire({
                title: adContent,
                icon: "success",
                html: `
                El número de reserva es: <b>${reservation.numero}</b>,<br/>
                <br/>
                ${checkedboxBasica ? `<p><b>Tipo de Bicicleta ${reservation.tipoBasica}:</b></p>
                <p>Cantidad: ${reservation.cantidadBasica}</p>
                <p>Horas: ${reservation.horasBasica}</p>
                <p>Subtotal Básica: $${reservation.subtotalBasica}</p>` : ""}
                ${checkedboxPremium ? `<p><b>Tipo de Bicicleta ${reservation.tipoPremium}:</b></p>
                <p>Cantidad: ${reservation.cantidadPremium}</p>
                <p>Horas: ${reservation.horasPremium}</p>
                <p>Subtotal Premium: $${reservation.subtotalPremium}</p>` : ""}
                <p>Total: $${reservation.total}</p>
                Chequea su estado <a href="../html/tu-reserva.html">aquí</a>,`,
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false,
                confirmButtonColor: "#db301d",
            });
        })
        .catch(error => {
            console.error(error);
            alert("ocurrio un error al cargar.");
        });
}


//! mi idea para usar fetch fue consultar la temperatura mediante la API de OpenWeatherMap
function fetchWeather() {
    const apiKey = "43319fed4ceaef4a314a1c482880740d";

    const cityName = 'Bariloche';
    const countryCode = 'AR';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Datos no encontrados.');
            }
            return response.json();
        })
        .then(data => {
            const weatherDescription = data.weather[0].main;
            const temperature = Math.floor(data.main.temp - 273.15); // convertir de kelvin a celsius
            Swal.fire({
                title: "Clima en Bariloche hoy:",
                text: `${weatherDescription}, ${temperature}°C`,
                // icon: "question"
                confirmButtonColor: "#db301d"
            });
        })
        .catch(error => {
            console.error('Error cargando los datos:', error);
        });
}


//boton para ejecutar la funcion de reserva

botonCalcular.addEventListener("click", calcularReserva);

//boton clima

botonClima.addEventListener('click', fetchWeather);
















