

  document.getElementById('registroForm').addEventListener('submit',function (event){
    event.preventDefault()
    const email= document.getElementById("email").value
    const pass= document.getElementById("password").value
    const apellidos= document.getElementById("apellidos").value
    const nombres= document.getElementById("nombres").value
    const direccion= document.getElementById("direccion").value
    const celular= document.getElementById("telefono").value
    const identificacion= document.getElementById("identificacion").value
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "correo": email,
      "contrasenia": pass,
      "nombre": nombres,
      "apellido": apellidos,
      "identificacion": identificacion,
      "celular": celular,
      "direccion": direccion

    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    
    fetch("http://localhost:3000/usuario/registrar", requestOptions)
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

                window.location.href="https://frontend-homeservice.vercel.app/vistas/login.html"
              }

            })
          }
         
          return response.text();
    })
    .then((result) => {
        
    })
    .catch((error) => console.error(error));
})