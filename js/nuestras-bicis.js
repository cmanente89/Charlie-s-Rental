//mostrar stock en nuestras-bicis.html
//USAR EL BOTON PARA MOSTRAR STOCK, deultima poner otro boton que linkee a la reserva
//ver como lograr que al cargar la pagina ya muestre el stock de ambas bicis, no funciona a menos que haya primero hecho alguna reserva


document.addEventListener("DOMContentLoaded", function () {
    const stockBasica = localStorage.getItem("stockBasica");
    const stockPremium = localStorage.getItem("stockPremium");


    const botonBasica = document.querySelector('.modelo-basica .btn');
    botonBasica.addEventListener('click', function () {
        displayStock('basica');
        console.log(botonBasica)
    });

    const botonPremium = document.querySelector('.modelo-premium .btn');
    botonPremium.addEventListener('click', function () {
        displayStock('premium');
        console.log(botonPremium)
    });
});

function displayStock(tipo) {
    const stock = tipo === 'basica' ? localStorage.getItem("stockBasica") : localStorage.getItem("stockPremium");//ternario
    const stockElement = document.getElementById(`stock-${tipo}`);
    if (stock) {
        stockElement.innerHTML = `<p>Stock disponible: ${stock} unidades</p>`;
    } else {
        stockElement.innerHTML = "<p>Stock no disponible</p>";
    }
}