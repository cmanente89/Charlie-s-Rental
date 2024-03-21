// funcionalidad de pagina "tu reserva"

document.addEventListener("DOMContentLoaded", function () {
    const consultarReservaBtn = document.querySelector(".chequear-reserva button");
    consultarReservaBtn.addEventListener("click", mostrarReservas);

    function mostrarReservas() {
        const numeroReserva = document.getElementById("inputDefault").value.toString();//convierto a string para que funcione la comparacion con lo que esta guardado en el array de reservas
        const reservas = JSON.parse(localStorage.getItem("reservas")) || [];//esto me asegura que al menos se le asigna un array vacio a const reservas

        const reservaEncontrada = reservas.find(reserva => reserva.numero === numeroReserva);

        if (reservaEncontrada) {
            const infoReserva = document.getElementById('info-reserva');





            Swal.fire({
                title: "Reserva Encontrada",
                icon: "success",
                html: `
                <div id="info-reserva">
                <p>Número de reserva: ${reservaEncontrada.numero}</p>
                <p>Cantidad de bicis básicas: ${reservaEncontrada.cantidadBasica}</p>
                <p>Horas de bicis básicas: ${reservaEncontrada.horasBasica}</p>
                <p>Subtotal de bicis básicas: $${reservaEncontrada.subtotalBasica}</p>
                <p>Cantidad de bicis premium: ${reservaEncontrada.cantidadPremium}</p>
                <p>Horas de bicis premium: ${reservaEncontrada.horasPremium}</p>
                <p>Subtotal de bicis premium: $${reservaEncontrada.subtotalPremium}</p>
                <p><strong>Total: $${reservaEncontrada.total}</strong></p>

                
            
                
                
                
                
                //agregar fecha
                //agregar un estado

            </div> `,
                showCloseButton: false,
                showCancelButton: false,
                buttonStyling: false,
                focusConfirm: false,//chequear que hace esto                
            });

        } else {
            // alert("La reserva no fue encontrada.");
            Swal.fire({
                text: "La reserva no fue encontrada",
                icon: "error"
                //!modificar el estilo del OK?
            });
        }
    }
});


