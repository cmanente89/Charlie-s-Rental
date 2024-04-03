//mostrar stock en nuestras-bicis.html

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