const productos = [
  {
    id: 1,
    nombre: "Teclado Mecánico RGB Pro",
    descripcion: "Teclado con switches Blue, retroiluminación personalizada y estructura de aluminio.",
    categoria: "Perifericos",
    precio: 8500,
    imagen: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
    disponibilidad: "si",
    valoracion: 4.8
  },
  {
    id: 2,
    nombre: "Mouse Gamer Predator",
    descripcion: "Sensor óptico de 16000 DPI, 6 botones programables y diseño ergonómico.",
    categoria: "Perifericos",
    precio: 4200,
    imagen: "https://images.pexels.com/photos/2106216/pexels-photo-2106216.jpeg?auto=compress&cs=tinysrgb&w=800",
    disponibilidad: "si",
    valoracion: 4.5
  },
  {
    id: 3,
    nombre: "Auriculares HyperBlast 7.1",
    descripcion: "Sonido envolvente 7.1, micrófono con cancelación de ruido y almohadillas de memory foam.",
    categoria: "Perifericos",
    precio: 12000,
    imagen: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800",
    disponibilidad: "no",
    valoracion: 4.9
  },
  {
    id: 4,
    nombre: "Pad Mouse XXL Galaxy",
    descripcion: "Superficie de tela de baja fricción y base de goma antideslizante de 90x40cm.",
    categoria: "Perifericos",
    precio: 2500,
    imagen: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
    disponibilidad: "si",
    valoracion: 4.2
  },
  {
    id: 5,
    nombre: "Monitor 144Hz UltraSmooth",
    descripcion: "Pantalla de 24 pulgadas, 1ms de respuesta y tecnología FreeSync.",
    categoria: "Monitores",
    precio: 45000,
    imagen: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800",
    disponibilidad: "si",
    valoracion: 4.7
  },
  {
    id: 6,
    nombre: "Mouse Inalámbrico Swift",
    descripcion: "Conexión de 2.4GHz sin latencia, batería recargable y ultra liviano.",
    categoria: "Perifericos",
    precio: 7800,
    imagen: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    disponibilidad: "si",
    valoracion: 3.9
  },
  {
    id: 7,
    nombre: "Teclado TKL Compacto",
    descripcion: "Diseño sin teclado numérico para ganar espacio en el escritorio, switches Red silenciosos.",
    categoria: "Perifericos",
    precio: 6300,
    imagen: "https://images.unsplash.com/photo-1706970454339-e262d7db3244?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    disponibilidad: "no",
    valoracion: 4.0
  },
  {
    id: 8,
    nombre: "Micrófono Condensador Streamer",
    descripcion: "Patrón cardioide, conexión USB plug and play con trípode incluido.",
    categoria: "Perifericos",
    precio: 9500,
    imagen: "https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=800",
    disponibilidad: "si",
    valoracion: 4.6
  },
  {
    id: 9,
    nombre: "Silla Gamer ErgoRed",
    descripcion: "Ergonomía superior con almohadillas lumbares, reclinable hasta 180 grados.",
    categoria: "Muebles",
    precio: 35000,
    imagen: "https://images.unsplash.com/photo-1612011213721-3936d387f318?q=80&w=638&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    disponibilidad: "si",
    valoracion: 4.4
  },
  {
    id: 10,
    nombre: "Placa de Video RTX 4070",
    descripcion: "Potencia de última generación para gaming en 4K y Ray Tracing avanzado.",
    categoria: "Hardware",
    precio: 250000,
    imagen: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
    disponibilidad: "si",
    valoracion: 4.9
  },
  {
    id: 11,
    nombre: "Memoria RAM 16GB RGB",
    descripcion: "Kit de 2x8GB a 3200MHz con iluminación sincronizable y disipador de calor.",
    categoria: "Hardware",
    precio: 15000,
    imagen: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80",
    disponibilidad: "si",
    valoracion: 4.7
  },
  {
    id: 12,
    nombre: "Gabinete Glass Tower",
    descripcion: "Panel lateral de vidrio templado, incluye 3 ventiladores RGB frontales.",
    categoria: "Hardware",
    precio: 18500,
    imagen: "https://images.pexels.com/photos/4581902/pexels-photo-4581902.jpeg?auto=compress&cs=tinysrgb&w=800",
    disponibilidad: "si",
    valoracion: 4.3
  },
  {
    id: 13,
    nombre: "Webcam Full HD 1080p",
    descripcion: "Ideal para streaming y videollamadas con enfoque automático y micrófono dual.",
    categoria: "Perifericos",
    precio: 8200,
    imagen: "https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=800",
    disponibilidad: "si",
    valoracion: 4.1
  },
  {
    id: 14,
    nombre: "Joystick Pro Wireless",
    descripcion: "Compatible con PC y Consolas, gatillos adaptativos y batería de larga duración.",
    categoria: "Perifericos",
    precio: 14500,
    imagen: "https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg?auto=compress&cs=tinysrgb&w=800",
    disponibilidad: "no",
    valoracion: 4.5
  },
  {
    id: 15,
    nombre: "Fuente 750W 80+ Gold",
    descripcion: "Eficiencia energética certificada, totalmente modular para un cableado limpio.",
    categoria: "Hardware",
    precio: 22000,
    imagen: "https://images.unsplash.com/photo-1716062890647-60feae0609d0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    disponibilidad: "si",
    valoracion: 4.6
  },
  {
    id: 16,
    nombre: "Silla Gamer ErgoRed",
    descripcion: "Ergonomía superior con almohadillas lumbares, reclinable hasta 180 grados.",
    categoria: "Muebles",
    precio: 35000,
    imagen: "https://images.unsplash.com/photo-1612011213721-3936d387f318?q=80&w=638&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    disponibilidad: "si",
    valoracion: 4.4
  },
  {
    id: 17,
    nombre: "Silla Gamer ErgoRed",
    descripcion: "Ergonomía superior con almohadillas lumbares, reclinable hasta 180 grados.",
    categoria: "Muebles",
    precio: 35000,
    imagen: "https://images.unsplash.com/photo-1612011213721-3936d387f318?q=80&w=638&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    disponibilidad: "si",
    valoracion: 4.4
  },
];

let cantProductos = productos.length

const setearCantidad = (tamañoPagina) => {
  let listaProductos = [];
  for ( let i = 0; i < productos.length; i += tamañoPagina) {
    listaProductos.push(productos.slice(i, i + tamañoPagina))
  }
  return listaProductos
}

const appState = {
  productos: setearCantidad(4),
  limiteProductos: setearCantidad(4).length,
  indiceProductosActuales: 0,
  filtroActivo: null,
}