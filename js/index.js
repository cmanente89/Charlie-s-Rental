
//borrar!
{/* <div class="formulario">
    <div class="tipo-bicicleta">
        <label for="exampleSelect1" class="form-label mt-4">Seleccione el tipo de bicicleta</label>
        <select class="form-select" id="rentalForm_bikeType">  <option>Básica</option>
            <option>Premium</option>
        </select>
    </div>
    <div class="cantidad-bicicletas">
        <div>
            <label class="col-form-label mt-4" for="inputDefault">Seleccion la cantidad de bicicletas</label>
            <input type="text" class="form-control" placeholder=" " id="rentalForm_quantity">  </div>
    </div>
    <div class="cantidad-horas">
        <label for="exampleSelect1" class="form-label mt-4">Seleccione la cantidad de horas</label>
        <select class="form-select" id="rentalForm_duration">  <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
        </select>
    </div>
    <button type="submit" id="submitButton">Calcular</button>
</div> */}



const seleccionTipo = document.getElementById("seleccion-tipo");
// const valorAnterior = null;

seleccionTipo.addEventListener("change", () => {
    const valorActual = document.getElementById("seleccion-tipo").value;
    console.log(valorActual)
});




const seleccionCantidad = document.getElementById("seleccion-cantidad").value;
const seleccionHoras = document.getElementById("seleccion-horas").value;


const botonReservar = document.getElementById("boton-reserva");
// console.log(botonReservar);

botonReservar.addEventListener("click", () => {
    console.log("funciona");
});


// console.log(seleccionTipo);
// console.log(seleccionCantidad);
// console.log(seleccionHoras);
// console.log(seleccionTipo);



let prueba = document.getElementById("probando");
console.log(prueba.innerText);



