//mostrar stock en nuestras-bicis.html
//USAR EL BOTON PARA MOSTRAR STOCK, deultima poner otro boton que linkee a la reserva

document.addEventListener("DOMContentLoaded", function () {

    const stockBasica = localStorage.getItem("stockBasica");
    const stockPremium = localStorage.getItem("stockPremium");


    document.getElementById("display-stock-basica").innerText = stockBasica;
    document.getElementById("display-stock-premium").innerText = stockPremium;
});