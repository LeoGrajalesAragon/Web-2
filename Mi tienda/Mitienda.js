// Lista de productos
const productos = [
    { id: 1, nombre: "Camisa", precio: 500 },
    { id: 2, nombre: "Pantalón", precio: 800 },
    { id: 3, nombre: "Zapatos", precio: 600 }
  ];
  
  const carrito = [];
  
  // Función para agregar productos al carrito
  const agregarAlCarrito = (idProducto) => {
    const producto = productos.find(p => p.id === idProducto);
    carrito.push(producto);
    
    // Alerta cuando se agrega un producto al carrito
    alert(`${producto.nombre} agregado al carrito.`);
  
    mostrarCarrito();
  };
  
  // Función para mostrar los productos del carrito
  const mostrarCarrito = () => {
    const carritoUl = document.getElementById("carrito");
    const totalP = document.getElementById("total");
  
    carritoUl.innerHTML = "";
    let total = 0;
  
    carrito.forEach(producto => {
      const li = document.createElement("li");
      li.textContent = `${producto.nombre} - $${producto.precio}`;
      carritoUl.appendChild(li);
      total += producto.precio;
    });
  
    totalP.textContent = `Total: $${total}`;
    
    // Alerta cuando se actualiza el total del carrito
    alert(`Carrito actualizado. Total: $${total}`);
  };
  
  // Función para mostrar los productos ordenados
  const mostrarProductos = () => {
    const listaProductos = document.getElementById("lista-productos");
    listaProductos.innerHTML = ""; // Limpiar la lista de productos
  
    productos.forEach(producto => {
      const li = document.createElement("li");
      li.textContent = `${producto.nombre} - $${producto.precio}`;
      const boton = document.createElement("button");
      boton.textContent = "Agregar";
      boton.onclick = () => agregarAlCarrito(producto.id);
      li.appendChild(boton);
      listaProductos.appendChild(li);
    });
  };
  
  // Función para ordenar los productos
  const ordenarProductos = () => {
    const criterio = document.getElementById("orden").value;
  
    if (criterio === "nombre") {
      productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (criterio === "precioAsc") {
      productos.sort((a, b) => a.precio - b.precio);
    } else if (criterio === "precioDesc") {
      productos.sort((a, b) => b.precio - a.precio);
    }
  
    // Alerta cuando los productos se ordenan
    alert(`Productos ordenados por ${criterio === 'nombre' ? 'Nombre' : criterio === 'precioAsc' ? 'Precio (Menor a Mayor)' : 'Precio (Mayor a Menor)'}.`);
  
    // Mostrar los productos ordenados
    mostrarProductos();
  };
  
  // Mostrar los productos al cargar la página
  document.addEventListener("DOMContentLoaded", () => {
    mostrarProductos();
  });
  