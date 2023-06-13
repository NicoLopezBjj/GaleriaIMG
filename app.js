// Variables

const btnCierra = document.getElementById("btnCierra")

const btnAdelanta = document.getElementById("btnAdelanta")

const btnRetrocede = document.getElementById("btnRetrocede")

const imagenes = document.getElementById("imagenes")

const lightBox = document.getElementById("contenedorPrincipal")

const imgActiva = document.getElementById("imagenActiva")

let imagenIndice = 0

// Abrir el lightbox

const abrir = () => {
   lightBox.style.display = "flex"
}

imagenes.addEventListener("click", abrir)


const cerrar = () => {
    lightBox.style.display = "none"
}

btnCierra.addEventListener("click", cerrar)


