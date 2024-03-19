/*funcionalidad no implementada aun*/

document.addEventListener("DOMContentLoaded", function () {
    const consultarReservaBtn = document.querySelector(".chequear-reserva button");
    consultarReservaBtn.addEventListener("click", mostrarReservas);

    function mostrarReservas() {
        const numeroReserva = document.getElementById("inputDefault").value.toString();//convierto a string para que funcione la comparacion con lo que esta guardado en el array de reservas
        const reservas = JSON.parse(localStorage.getItem("reservas")) || [];//esto me asegura que al menos se le asigna un array vacio a const reservas

        const reservaEncontrada = reservas.find(reserva => reserva.numero === numeroReserva);

        if (reservaEncontrada) {
            const infoReserva = document.getElementById('info-reserva');
            infoReserva.innerHTML = `
                <div id="info-reserva">
                    <p>Número de reserva: ${reservaEncontrada.numero}</p>
                    <p>Fecha de reserva: ${reservaEncontrada.fecha}</p>
                    <p>Estado: ${reservaEncontrada.estado}</p>
                    <!-- Add more details if needed -->
                </div>
            `;
        } else {
            alert("La reserva no fue encontrada.");
        }
    }
});


