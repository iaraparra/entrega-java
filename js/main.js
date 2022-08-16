
  guardarProductosLS(productos);
  actualizarBotonCarrito();
  
  function consultaExitosa() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Compra Exitosa',
      showConfirmButton: false,
      timer: 1500
    });
    
    const enviarForm=document.getElementById("enviarConsulta");
    enviarForm.onclick=consultaExitosa();
  }


//   function enviarForm () {
//    const enviarForm= document.getElementById("enviarConsulta");

//    enviarForm.addEventListener = consultaExitosa();
  
// }

consultaExitosa();