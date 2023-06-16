// Variables

const btnCierra = document.getElementById("btnCierra")

const btnAdelanta = document.getElementById("btnAdelanta")

const btnRetrocede = document.getElementById("btnRetrocede")

const imagenes = document.getElementsByClassName("imagenes")
console.log(imagenes)
const lightBox = document.getElementById("contenedorPrincipal")

const imgActiva = document.getElementById("imagenActiva")

let imagenIndice = 0

// Abrir el lightbox

const abrir = (event) => {
   lightBox.style.display = "flex"
   imgActiva.src = event.target.src
   console.log(event)
   console.log(event.target.src)
}

for(let imagen of imagenes){
    imagen.addEventListener('click', (event) => abrir(event))
}

// Cerrar el lightbox

const cerrar = () => {
    lightBox.style.display = "none"

}

btnCierra.addEventListener("click", cerrar)

// Cambiar imagenes

const adelantar = () => {
    if (imagenIndice === imagenes.length - 1){
        imagenIndice = -1
    }
    imgActiva.src = imagenes[imagenIndice + 1].src
    imagenIndice++
}

btnAdelanta.addEventListener("click",adelantar)


/* arrary de imagenes
indices de de 0 a 9,
variable con index de imgactiva
array[index]
*/
