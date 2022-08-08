/* const productos = [{
    id: 1,
    nombre: 'Lampara Gato',
    valor: 2798,
    imageURL: '../assets/imagenes/lamparaGato.jpeg',
},
{
    id: 2,
    nombre: 'Maquillaje',
    valor: 2998,
    imageURL: '../assets/imagenes/maquillaje.jpeg',
},
{
    id: 3,
    nombre: 'Mochila Chimola',
    valor: 6198,
    imageURL: '../assets/imagenes/mochilaChimo.jpeg',
},
{
    id: 4,
    nombre: 'Vaso Unicornio',
    valor: 5298,
    imageURL: '../assets/imagenes/vaso uni.jpeg',
},
]; */



/// localstorage ////
function obtenerProductosLS() {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

function guardarProductosLS(productos) {
    localStorage.setItem("productos", JSON.stringify(productos));
}

/* function buscarProducto(id) {
    let producto = obtenerProductosLS();
    return productos.find(x => x.id == id);
} */



fetch("js/productos.json")
    .then((response) => response.json())
    .then((data) => {
        const productos = document.getElementById("productos");
        data.forEach(prod => {
            let columna = document.createElement("div");
            columna.className = "col-md-3";
            let div_padre = document.createElement("div");
            div_padre.className = "card m-2";
            let div_hijo1 = document.createElement("div");
            div_hijo1.className = "card-header";
            let div_hijo2 = document.createElement("div");
            div_hijo2.className = "card-body";
            
            let imagen = document.createElement("img");
            imagen.src = "assets/imagenes/" + prod.imageURL;
            imagen.alt = prod.nombre;
            imagen.className = "imagenProducto"

            /* <button ref=${producto.id} class="btn btn_purple button boton" title="Agregar al Carrito" onclick="agregarCarrito(${producto.id})">Comprar</a> */
            let divBoton = document.createElement("div");
            divBoton.className = "divbotonAgregar"
            let botonComprar = document.createElement("button");
            botonComprar.className = "botonAgregar";
            botonComprar.textContent = "Agregar al Carrito";
            botonComprar.onclick = function() {
                agregarCarrito(prod)
                };


            div_hijo1.innerHTML = `<b>${prod.nombre} </b> <br>$${prod.precio}`;
        
            divBoton.appendChild(botonComprar);
            div_hijo2.appendChild(imagen);
            div_hijo2.appendChild(divBoton);
            div_padre.appendChild(div_hijo1);
            div_padre.appendChild(div_hijo2);
            columna.appendChild(div_padre);
            productos.appendChild(columna);
        });
    })
