const enviarForm = document.getElementById("enviarConsulta");
enviarForm.addEventListener(consultaExitosa());

function consultaExitosa() {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Su consulta ha sido enviada',
    text: 'Nos comunicaremos en breve',
    showConfirmButton: false,
    timer: 2000
  })
}