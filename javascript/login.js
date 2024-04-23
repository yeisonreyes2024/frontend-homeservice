

document.getElementById('loginForm').addEventListener('submit',function (event){
  event.preventDefault()
    const email= document.getElementById("email").value
    const pass= document.getElementById("password").value
    // console.log(e,p);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "email": email,
      "password": pass
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch("http://localhost:3000/login", requestOptions)
      .then((response) => {
          console.log('response',response)
          if(response.status == 400){
            Swal.fire({
                title: 'No se encontró el usuario',
                icon:"warning",
                showConfirmButton:true
            })
          }else{
            Swal.fire({
                title: 'Ingreso exitoso',
                text:"Bienvenido a Homeservice",
                icon:"success",
                showConfirmButton:true,
            }).then(res=>{
              if(res.isConfirmed){
                window.location.href="http://127.0.0.1:5500/frontend-homeService/vistas/dashboard.html"
                return response.text();

              }

            })
          }
         
    })
    .then((result) => {
       
        
    })
    .catch((error) => console.error(error));
})