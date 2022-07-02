 const pastel = {
     preparaMasa: false,
     hornearMasa: false,
     decorarPastel: false
 }
 const preparandoPastel = ( procedimiento ) => {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             // Ejecucion
             console.log("Preparando masa");
             procedimiento.preparaMasa = true
             // Ya se resolvio mi promesa
             if(procedimiento.preparaMasa){
               resolve(procedimiento) // -> me ahorro return, es un return -> then recibe esto
             }else {
               reject(new Error("No se pudo preparar")) // catch recibe esto
             }
           }, 3000)
     })
     const preparandoPastel = ( procedimiento ) => {
         return new Promise((resolve, reject) => {
             setTimeout(() => {
                 // Ejecucion
                 console.log("Preparando masa");
                 procedimiento.preparaMasa = true
                 // Ya se resolvio mi promesa
                 if(procedimiento.preparaMasa){
                   resolve(procedimiento) // -> me ahorro return, es un return -> then recibe esto
                 }else {
                   reject(new Error("No se pudo preparar")) // catch recibe esto
                 }
               }, 3000)
         })
     const preparandoMasa =  preparandoPastel(pastel)
  
 
  
  
     then( response => {
         //console.log(response);
         setTimeout(() => {           
             console.log("Decorando pastel masa");
             procedimiento.hornearMasa = true
          
             if(procedimiento.hornearMasa){
               resolve(procedimiento) 
             }else {
               reject(new Error("No se pudo hornear")) // catch recibe esto
             }
           }, 2000)
         }
     ).then(
         setTimeout(() => {           
             console.log("Decorando pastel ");
             procedimiento.decorarPastel = true
          
             if(procedimiento.decorarPastel){
               resolve(procedimiento) 
             }else {
               reject(new Error("No se decorar")) // catch recibe esto
             }
           }, 2000)
     ).catch(err => {
         console.log(err);
     })
 }
 preparandoPastel(pastel)


// //Tarea de promesas
