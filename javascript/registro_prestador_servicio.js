document.getElementById('registro_prestador_servicioForm').addEventListener('submit',function (event){
    event.preventDefault()
    const email= document.getElementById("correo").value
    const pass= document.getElementById("contrasenia").value
    const apellidos= document.getElementById("apellidos").value
    const nombres= document.getElementById("nombres").value
    const direccion= document.getElementById("direccion").value
    const celular= document.getElementById("telefono").value
    const identificacion= document.getElementById("identificacion").value
    const tipo_servicio= document.getElementById("tipo_servicio").value
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "correo": email,
      "contrasenia": pass,
      "nombres": nombres,
      "apellidos": apellidos,
      "identificacion": identificacion,
      "telefono": celular,
      "direccion": direccion,
      "tipo_servicio": tipo_servicio

    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    
    fetch("http://localhost:3000/prestador-servicio/registrar", requestOptions)
      .then((response) => {
          if(response.status == 400){
            Swal.fire({
                title: 'No se pudo registrar el usuario',
                icon:"warning",
                showConfirmButton:true
            })
          }else{
            Swal.fire({
                title: 'Registro exitoso',
                text:"usuario ha sido registrado correctamente",
                icon:"success",
                showConfirmButton:true,
            }).then(res=>{
              if(res.isConfirmed){

                window.location.href="https://frontend-homeservice.vercel.app/frontend-homeService/vistas/login.html"
              }

            })
          }
         
          return response.text();
    })
    .then((result) => {
        
    })
    .catch((error) => console.error(error));
})