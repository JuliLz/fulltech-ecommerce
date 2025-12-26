//TRAIGO ELEMENTOS DEL LOCALSTORAGE
//SI NO HAY ELEMENTOS EN LOCALSTORAGE INICIO EL ARRAY VACIO
//LOCALSTORAGE ME DA UN STRING JSON Y CON PARSE LOS HAGO OBJETOS
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//FUNCION PARA GUARDAR EL CARRITO. CADA ELEMENTO SE GUARDA EN EL LOCALSTORAGE EN FORMATO JSON
const guardarCarrito = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

//VARIABLES DE CONTAINERS, BOTONES, INPUTS ETC
const prodContainer = document.querySelector(".product-grid")
const btnAgregarCarrito = document.querySelector(".btnAddCart")
const btnVerMas = document.querySelector(".btnVerMas")
const btnFiltroPerifericos = document.querySelector(".btnFiltroPerifericos")
const btnFiltroHardware = document.querySelector(".btnFiltroHardware")
const btnFiltroMuebles = document.querySelector(".btnFiltroMuebles")

//FUNCION PLANTILLA INNERHTML
const crearPlantillaProducto = (producto) => {
    const {id, nombre, descripcion, categoria, precio, imagen, disponibilidad, valoracion} = producto;
    return `
    <article class="card product-card">
        <h3>${nombre}</h3>
        <p>
            ${descripcion}
        </p>
        <img src=${imagen}></img>
        <div class="price-line">
            <span class="price">$${precio}</span>
        </div>
        <div class="price-line">
        <span class="price">★${valoracion}</span>
        <span class="price">${disponibilidad === "si"
            ? "Disponible"
            : "Agotado"
        }</span>
        </div>
        <button type="button" class="btn primary btnAddCart"
        data-id="${id}
        data-nombre="${nombre}
        data-descripcion="${descripcion}
        data-categoria="${categoria}
        data-precio="${precio}
        data-imagen="${imagen}
        data-disponibilidad="${disponibilidad}
        data-valoracion="${valoracion}
        ">Agregar al carrito</button>
    </article>
    `
}

//FUNCION RENDERIZAR
const renderizarProductos = (listaProductos) => {
    prodContainer.innerHTML += listaProductos.map(crearPlantillaProducto).join("")
}

//FUNCION VER MAS PRODUCTOS
const verMasProductos = () => {
    appState.indiceProductosActuales += 1;
    const {productos, indiceProductosActuales} = appState
    renderizarProductos(productos[indiceProductosActuales])
    if ( appState.indiceProductosActuales ===  appState.limiteProductos - 1) {
        btnVerMas.classList.add("ocultado")
    }
}

//FUNCION PARA LOS FILTROS
const filtrar = (filtro) => {
    let listaProdFiltrados = []
    for (let i = 0; i < productos.length; i++) {
        if(productos[i].categoria === filtro) {
            listaProdFiltrados.push(productos[i])
        } 
    }
    prodContainer.innerHTML = ""
    renderizarProductos(listaProdFiltrados)
    btnVerMas.classList.add("ocultado")
}

//FUNCION INICIAR
const init = () => {
    renderizarProductos(appState.productos[0])
    btnVerMas.addEventListener("click", verMasProductos)
    btnFiltroPerifericos.addEventListener("click", () => { filtrar("Perifericos") })
    btnFiltroHardware.addEventListener("click", () => { filtrar("Hardware") })
    btnFiltroMuebles.addEventListener("click", () => { filtrar("Muebles") })
}



init()
