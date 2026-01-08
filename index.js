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
const carritoTotalSpan = document.querySelector(".carrito-total")
const carritoCantidadSpan = document.querySelector(".carrito-cantidad")
const btnComprar = document.querySelector(".btnComprar")
const btnVaciarCarrito = document.querySelector(".btnVaciarCarrito")
const agregarModal = document.querySelector(".agregar-modal")
const btnSumarUno = document.querySelector(".btnSumarUno")
const btnRestarUno = document.querySelector(".btnRestarUno")

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
        data-id="${id}"
        data-nombre="${nombre}"
        data-descripcion="${descripcion}"
        data-categoria="${categoria}"
        data-precio="${precio}"
        data-imagen="${imagen}"
        data-disponibilidad="${disponibilidad}"
        data-valoracion="${valoracion}"
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
const agregarAlCarrito = (e) => { 
    if (!e.target.classList.contains("btnAddCart")) {
        return
    }
    if(e.target.dataset.disponibilidad === "no") {
        alert("Este producto está agotado")
        return
    }
    const producto = crearDataProductoCarrito(e.target.dataset)
    if(existeEnElCarrito(producto)) {
        sumarUnidadCarrito(producto)
        abrirCarrito()
    } else {
        crearProductoEnCarrito(producto)
        abrirCarrito()
    }
    actualizarCarrito()
}

const sumarUnidadCarrito = (producto) => {
    carrito = carrito.map((item) => {
        return item.id === producto.id 
        ? {...item, cantidad: item.cantidad + 1}
        : item
    })
}

const manejarCantidad = (e) => {
    if(e.target.classList.contains("btnSumarUno")) {
        sumarUnoBtn(e.target.dataset.id)
    } else if (e.target.classList.contains("btnRestarUno")) {
        restarUnoBtn(e.target.dataset.id)
    }
    actualizarCarrito()
}

const sumarUnoBtn = (id) => {
    const prodExistente = carrito.find((item)=>item.id === id)
    sumarUnidadCarrito(prodExistente)
}

const restarUnoBtn = (id) => {
    const prodExistente = carrito.find((item) => item.id === id)
    if (prodExistente.cantidad === 1) {
        if(window.confirm("¿Desea eliminar el producto del carrito?")){
            eliminarProductoCarrito(prodExistente)
        }
        return;
    }
    restarUnidadCarrito(prodExistente)
}

const restarUnidadCarrito = (prodExistente) => {
    carrito = carrito.map((item)=>{
        return item.id === prodExistente.id
        ? {...item, cantidad: item.cantidad - 1}
        : item
    })
    actualizarCarrito()
}


const eliminarProductoCarrito = (productoExistente) => {
    carrito = carrito.filter((producto)=> producto.id !== productoExistente.id)
    actualizarCarrito()
}

const vaciarCarrito = () => {
    if(window.confirm("¿Desea vaciar el carrito?")){
        carrito = []
        actualizarCarrito()
        return
    }
}

const manejarBotonesCarrito = (e) => {
    if(!carrito.length) {
        return
    }
    if(e.target.classList.contains("btnVaciarCarrito")){
        vaciarCarrito()
    } else if (e.target.classList.contains("btnComprar")) {
        if(window.confirm(`¿Desea realizar la compra por $${obtenerTotalCarrito()}?`)) {
            alert("Gracias por su compra")
            carrito = []
            actualizarCarrito()
        }
        return
    }
    
}

const crearProductoEnCarrito = (producto) => {
    carrito = [...carrito, {...producto, cantidad: 1}]
}

const existeEnElCarrito = (producto) => {
    return carrito.find((item)=> item.id === producto.id)
}

const crearDataProductoCarrito = (producto) => {
    const {id, nombre, precio, imagen} = producto
    return {id,nombre,precio,imagen}
}

//FUNCION PLANTILLA CARRITO
const crearPlantillaCarrito = (producto) => {
    const {id, nombre, precio, imagen, cantidad} = producto;
    return `
        <article class="card product-card" style="width:300px">
            <h3>${nombre}</h3>
            <img src=${imagen}></img>
            <div class="price-line">
                <span class="price">$${precio}</span>
            </div>
            <button type="button" class="btn secondary btnSumarUno"
            data-id="${id}">+</button>
            <span class="price" style="text-align:center">${cantidad}</span>
            <button type="button" class="btn secondary btnRestarUno"
            data-id="${id}">-</button>
        </article>
       ` 
}

//FUNCION RENDERIZAR CARRITO
const renderizarCarrito = () => {
    if (!carrito.length) {
        carritoContainerItems.innerHTML = `<span class="price" style="color:white; display:flex">No hay productos</span>`
        return
    }
    carritoContainerItems.innerHTML = carrito.map((producto) => {
        return crearPlantillaCarrito(producto)
    }).join("")
}

//OBTENER TOTAL DEL CARRITO
const obtenerTotalCarrito = () => {
    return carrito.reduce((acumulador, producto) => {
        return acumulador + Number(producto.precio) * producto.cantidad
    }, 0)
}

//FUNCION MOSTRAR PRECIO CARRITO
const mostrarTotalCarrito = () => {
    carritoTotalSpan.innerHTML = `Total $${obtenerTotalCarrito()}`
}

//FUNCION MOSTRAR CANTIDAD CARRITO
const mostrarCantidadItemsCarrito = () => {
    carritoCantidadSpan.textContent = carrito.reduce((acumulador, producto) => {
        return acumulador + producto.cantidad
    }, 0)
}

//FUNCION ACTUALIZAR CARRITO
const actualizarCarrito = () => {
    renderizarCarrito()
    obtenerTotalCarrito()
    mostrarCantidadItemsCarrito()
    mostrarTotalCarrito()
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
    document.addEventListener("DOMContentLoaded", mostrarTotalCarrito)
    document.addEventListener("DOMContentLoaded", mostrarCantidadItemsCarrito)
    prodContainer.addEventListener("click", agregarAlCarrito)
    carritoContainer.addEventListener("click", manejarCantidad)
    carritoContainer.addEventListener("click", manejarBotonesCarrito)
}



init()
