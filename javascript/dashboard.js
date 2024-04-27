const toggle = document.querySelector(".toggle")
const menuDashboard = document.querySelector(".menu-dashboard")
const iconoMenu = toggle.querySelector("i")
const enlacesMenu = document.querySelectorAll(".enlace")

toggle.addEventListener("click", () => {
    menuDashboard.classList.toggle("open")

    if(iconoMenu.classList.contains("bx-menu")){
        iconoMenu.classList.replace("bx-menu", "bx-x")
    }else {
        iconoMenu.classList.replace("bx-x", "bx-menu")
    }
})

enlacesMenu.forEach(enlace => {
    enlace.addEventListener("click", () => {
        menuDashboard.classList.add("open")
        iconoMenu.classList.replace("bx-menu", "bx-x")
    })
})

function mostrarAlerta() {
    // Opciones de los radio button
    const opciones = {
      '1': ' usuario',
      '2': ' prestador de servicio',
    };

    // Mostrar la alerta
    Swal.fire({
      title: '¿cómo desea registrarse?',
      input: 'radio',
      inputOptions: opciones,
      inputValidator: (value) => {
        if (!value) {
          return 'Debes seleccionar una opción';
        }
      },
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar',
      showLoaderOnConfirm: true,
      preConfirm: (opcion) => {
        // Hacer algo con la opción seleccionada, por ejemplo:
        if(opcion==1){
            window.location.href="http://127.0.0.1:5500/frontend-homeService/vistas/registro.html"
          } else{
            window.location.href="http://127.0.0.1:5500/frontend-homeservice/vistas/registro_prestador_servicio.html"
        }
      }
    });
  }