# 🛒 E-Commerce App - JS Vanilla

### Proyecto en Desarrollo 🚧
Este es un proyecto de una tienda online moderna desarrollada durante mi aprendizaje de tecnologías web. Se enfoca en la manipulación dinámica del DOM, manejo de estados en JavaScript puro y persistencia de datos.

---

## 🚀 Funcionalidades Actuales

- **Renderizado Dinámico:** Generación de productos y componentes de la interfaz a partir de objetos de datos.
- **Sistema de Paginación:** Implementación de lógica de "Ver más" que trocea el catálogo para mejorar la carga visual.
- **Filtrado Avanzado:** Los productos pueden filtrarse por categorías (Periféricos, Hardware, Muebles).
- **Ordenamiento Alfabético:** Las tareas y productos se mantienen organizados automáticamente mediante el método `sort` y `localeCompare`.
- **Carrito de Compras (En proceso):** Menú lateral animado con transiciones CSS y lógica de apertura/cierre mediante clases dinámicas (`.carrito.open`).
- **Persistencia con LocalStorage:** Uso de `JSON.stringify` y `JSON.parse` para que los datos no se pierdan al recargar la página.
- **Validaciones de Formulario:** Control de entradas vacías y duplicados mediante métodos de arrays como `some` y `filter`.

---

## 🛠️ Tecnologías Usadas

<p align="left">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
</p>

---

## 📂 Estructura del Proyecto

* `index.html`: Estructura semántica del sitio.
* `style.css`: Estilos, degradados radiales y estados activos para componentes UI.
* `data.js`: Base de datos local con el catálogo de productos.
* `index.js`: Lógica principal y manejadores de eventos.

---

## 🔧 Próximos Pasos

- [ ] Implementar lógica de suma de precios en el carrito.
- [ ] Agregar funcionalidad para aumentar/disminuir cantidades de productos.
- [ ] Finalizar el proceso de Checkout.
- [ ] Responsive Design total para dispositivos móviles.

