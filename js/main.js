/* 
function renderProductosHTML(){
    let productos = obtenerProductosLS();
    let contenido = "";
  
   // CARRITO Y CARDS CON PRODUCTOS//
    for (let producto of productos){
      contenido += `
      <div class="card m-2 text-center" style="width: 18rem;">
        <img src="${producto.imageURL}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
            <h4 class="card-title fw-bold">${producto.nombre}</h4>
            <p class="card-text">Cantidad: ${producto.cantidad}</p>
            <p class="card-text">Precio: $ ${producto.valor}</p>
            <button ref=${producto.id} class="btn btn_purple button boton" title="Agregar al Carrito" onclick="agregarCarrito(${producto.id})">Comprar</a>
        </div>
      </div>
      `
    }
  
    document.getElementById("productos").innerHTML = contenido;
  }
  
  function renderProductosDOM(){
  };
  
 
  renderProductosHTML(); */
 
  guardarProductosLS(productos);
  actualizarBotonCarrito();
  