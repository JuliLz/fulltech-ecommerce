//TRAIGO ELEMENTOS DEL LOCALSTORAGE
//SI NO HAY ELEMENTOS EN LOCALSTORAGE INICIO EL ARRAY VACIO
//LOCALSTORAGE ME DA UN STRING JSON Y CON PARSE LOS HAGO OBJETOS
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//VARIABLES DE CONTAINERS, BOTONES, INPUTS ETC
const prodContainer = document.querySelector(".product-grid")
const btnAgregarCarrito = document.querySelector(".btnAddCart")
const btnVerMas = document.querySelector(".btnVerMas")
const btnFiltroTodos = document.querySelector(".btnFiltroTodos")
const btnFiltroPerifericos = document.querySelector(".btnFiltroPerifericos")
const btnFiltroHardware = document.querySelector(".btnFiltroHardware")
const btnFiltroMuebles = document.querySelector(".btnFiltroMuebles")
const btnCarrito = document.querySelector(".cart-btn")
const carritoContainer = document.querySelector(".carrito")
const btnCerrarCarrito = document.querySelector(".btnCerrarCarrito")
const carritoContainerItems = document.querySelector(".carritoItems")

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
        if ( !filtro || productos[i].categoria === filtro) {
            listaProdFiltrados.push(productos[i])
        }
    }
    if ( filtro === "Perifericos") {
        btnFiltroPerifericos.classList.add("active")
        btnFiltroHardware.classList.remove("active")
        btnFiltroMuebles.classList.remove("active")
        btnFiltroTodos.classList.remove("active")
    } else if (filtro === "Hardware") {
        btnFiltroPerifericos.classList.remove("active")
        btnFiltroHardware.classList.add("active")
        btnFiltroMuebles.classList.remove("active")
        btnFiltroTodos.classList.remove("active")
    } else if (filtro === "Muebles") {
        btnFiltroPerifericos.classList.remove("active")
        btnFiltroHardware.classList.remove("active")
        btnFiltroMuebles.classList.add("active")
        btnFiltroTodos.classList.remove("active")
    } else {
        btnFiltroPerifericos.classList.remove("active")
        btnFiltroHardware.classList.remove("active")
        btnFiltroMuebles.classList.remove("active")
        btnFiltroTodos.classList.add("active")
    }
    prodContainer.innerHTML = ""
    renderizarProductos(listaProdFiltrados)
    btnVerMas.classList.add("ocultado")
}

//FUNCIONES CARRITO
const abrirCarrito = () => {
    carritoContainer.classList.add("open")
    return
}

const cerrarCarrito = (e) => {
    if (!e.target.classList.contains("open")){
        carritoContainer.classList.remove("open")
        return
    }
    carritoContainer.classList.remove("open")
    return
}

//FUNCION AGREGAR AL CARRITO
const agregarAlCarrito = () => { 
}

//FUNCION RENDERIZAR CARRITO
const renderizarCarrito = () => {
    if (!carrito.length) {
        carritoContainerItems.innerHTML = `<span class="price" style="color:white; display:flex">No hay productos</span>`
    } else {
        carritoContainerItems.innerHTML = `
        
        `
    }
}

//FUNCION INICIAR
const init = () => {
    renderizarProductos(appState.productos[0])
    btnVerMas.addEventListener("click", verMasProductos)
    btnFiltroPerifericos.addEventListener("click", () => { filtrar("Perifericos") })
    btnFiltroHardware.addEventListener("click", () => { filtrar("Hardware") })
    btnFiltroMuebles.addEventListener("click", () => { filtrar("Muebles") })
    btnFiltroTodos.addEventListener("click", () => { filtrar() })
    btnCarrito.addEventListener("click", abrirCarrito)
    btnCerrarCarrito.addEventListener("click", cerrarCarrito)
    document.addEventListener("DOMContentLoaded", renderizarCarrito)
}



init()
