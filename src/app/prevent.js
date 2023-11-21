export const loginCheck = (user) => {
    console.log("ejecutando check prvent");
    // Verificar si ya se redirigió 
   
  
    if (!user) {
      // Usuario autenticado
      // Redirigir al usuario a la página que eligió
     
        window.location.href = "../../index.html";
     
  }

} 
