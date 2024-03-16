

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
    console.log("Checkbox checked:", isChecked);
    localStorage.setItem("checkedbox Basica", "checked")
});

const seleccionCantidadBasica = document.getElementById("seleccion-cantidad-basica");
seleccionCantidadBasica.addEventListener("change", () => {
    const cantidad = parseInt(seleccionCantidadBasica.value);
    console.log("Cantidad de bicicletas:", cantidad);
    localStorage.setItem("cantidadBicicletasBasica", cantidad);
});

const seleccionHorasBasica = document.getElementById("seleccion-horas-basica");//por que sin el value? ver diferencia con el anterior
seleccionHorasBasica.addEventListener("change", () => {
    const horas = seleccionHorasBasica.value;
    console.log(horas);
    localStorage.setItem("horasSeleccionadasBasica", horas);
});


const checkboxPremium = document.getElementById("check-premium");

checkboxPremium.addEventListener("change", function () {
    const isChecked = checkboxPremium.checked;
    console.log("Checkbox checked:", isChecked);
    localStorage.setItem("checkedbox Premium", "checked")
});

const seleccionCantidadPremium = document.getElementById("seleccion-cantidad-premium");
seleccionCantidadPremium.addEventListener("change", () => {
    const cantidad = parseInt(seleccionCantidadPremium.value);
    console.log("Cantidad de bicicletas:", cantidad);
    localStorage.setItem("cantidadBicicletasPremium", cantidad);
});

const seleccionHorasPremium = document.getElementById("seleccion-horas-premium");//por que sin el value? ver diferencia con el anterior
seleccionHorasPremium.addEventListener("change", () => {
    const horas = seleccionHorasPremium.value;
    console.log(horas);
    localStorage.setItem("horasSeleccionadasPremium", horas);
});


const botonCalcular = document.getElementById("boton-calcular");
botonCalcular.addEventListener("click", () => {
    console.log("funciona");
})

//funcion para reservar

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
            errorMessage.innerHTML = "La cantidad de bicicletas básicas seleccionada supera el stock disponible";
            return;//!VER DE METER UNA FUNCION PORQUE ESTO SE REPITE
        }
    }

    if (checkedboxPremium) {
        const bikePremium = bicicletas["Premium"];
        if (cantidadPremium > bikePremium.stock) {
            errorMessage.innerHTML = "La cantidad de bicicletas premium seleccionada supera el stock disponible";
            return;
        }
    }

    errorMessage.innerHTML = "";

    let totalBasica = 0;
    if (checkedboxBasica) {
        const bikeBasica = bicicletas["Básica"];
        totalBasica = bikeBasica.precioHora * horasBasica * cantidadBasica;
        bikeBasica.stock -= cantidadBasica;
        console.log(bicicletas["Básica"]["stock"]);
        localStorage.setItem("stockBasica", bikeBasica.stock);
    }

    let totalPremium = 0;
    if (checkedboxPremium) {
        const bikePremium = bicicletas["Premium"];
        totalPremium = bikePremium.precioHora * horasPremium * cantidadPremium;
        bikePremium.stock -= cantidadPremium;
        console.log(bicicletas["Premium"]["stock"]);//!VER DE METER UNA FUNCION PORQUE ESTO SE REPITE
        localStorage.setItem("stockPremium", bikePremium.stock);
    }

    const total = totalBasica + totalPremium;

    const reservationNumber = Math.floor(Math.random() * 900000) + 100000;
    const reservation = {
        numero: reservationNumber,
        tipoBasica: checkedboxBasica ? "Básica" : "",
        cantidadBasica: cantidadBasica || 0,
        horasBasica: horasBasica || 0,
        subtotalBasica: totalBasica,
        tipoPremium: checkedboxPremium ? "Premium" : "",
        cantidadPremium: cantidadPremium || 0,
        horasPremium: horasPremium || 0,
        subtotalPremium: totalPremium,
        total: total
    };



    reservas.push(reservation);
    localStorage.setItem("reservas", JSON.stringify(reservas));

    const reservationDetailsDiv = document.getElementById("reservation-details");
    reservationDetailsDiv.innerHTML = `
        <h3>Detalles de la Reserva</h3>
        <p>Número de Reserva: ${reservation.numero}</p>
        ${checkedboxBasica ? `<p>Tipo de Bicicleta Básica: ${reservation.tipoBasica}</p>
        <p>Cantidad Básica: ${reservation.cantidadBasica}</p>
        <p>Horas Básica: ${reservation.horasBasica}</p>
        <p>Subtotal Básica: ${reservation.subtotalBasica}</p>` : ""}
        ${checkedboxPremium ? `<p>Tipo de Bicicleta Premium: ${reservation.tipoPremium}</p>
        <p>Cantidad Premium: ${reservation.cantidadPremium}</p>
        <p>Horas Premium: ${reservation.horasPremium}</p>
        <p>Subtotal Premium: ${reservation.subtotalPremium}</p>` : ""}
        <p>Total: ${reservation.total}</p>
    `;


}

//boton para ejecutar la funcion de reserva

botonCalcular.addEventListener("click", calcularReserva);
















