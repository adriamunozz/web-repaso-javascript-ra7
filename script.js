// Interactividad 1: condicionales
const inputEdad = document.querySelector("#edad");
const btnEdad = document.querySelector("#btn-edad");
const resultadoEdad = document.querySelector("#resultado-edad");

btnEdad.addEventListener("click", function () {
    const edad = Number(inputEdad.value);

    if (inputEdad.value === "") {
        resultadoEdad.textContent = "Escribe una edad.";
    } else if (edad >= 18) {
        resultadoEdad.textContent = "Resultado: eres mayor de edad.";
    } else {
        resultadoEdad.textContent = "Resultado: eres menor de edad.";
    }
});

// Interactividad 2: arrays
const frutas = ["manzana", "pera", "plátano"];
const inputFruta = document.querySelector("#fruta");
const btnFruta = document.querySelector("#btn-fruta");
const listaFrutas = document.querySelector("#lista-frutas");

function mostrarFrutas() {
    listaFrutas.innerHTML = "";

    frutas.forEach(function (fruta) {
        listaFrutas.innerHTML += `<li>${fruta}</li>`;
    });
}

btnFruta.addEventListener("click", function () {
    const nuevaFruta = inputFruta.value.trim();

    if (nuevaFruta !== "") {
        frutas.push(nuevaFruta);
        inputFruta.value = "";
        mostrarFrutas();
    }
});

mostrarFrutas();

// Interactividad 3: eventos
let clics = 0;
const btnContador = document.querySelector("#btn-contador");
const resultadoContador = document.querySelector("#resultado-contador");

btnContador.addEventListener("click", function () {
    clics++;
    resultadoContador.textContent = "Clics: " + clics;
});
