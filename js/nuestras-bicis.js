//mostrar stock en nuestras-bicis.html
//USAR EL BOTON PARA MOSTRAR STOCK, deultima poner otro boton que linkee a la reserva

document.addEventListener("DOMContentLoaded", function () {
    // Retrieve stock values from local storage
    const stockBasica = localStorage.getItem("stockBasica");
    const stockPremium = localStorage.getItem("stockPremium");

    // Update innerHTML of the corresponding elements
    document.getElementById("display-stock-basica").innerText = stockBasica;
    document.getElementById("display-stock-premium").innerText = stockPremium;
});