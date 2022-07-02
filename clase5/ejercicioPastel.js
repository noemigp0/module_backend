const pastel = {
    preparaMasa: false,
    hornearMasa: false,
    decorarPastel: false
}

const preparandoMasa = ( procedimiento ) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {            
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
}

const hornearMasa = ( procedimiento ) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {            
            console.log("horneando masa");
            procedimiento.hornearMasa = true
            // Ya se resolvio mi promesa
            if(procedimiento.hornearMasa){
              resolve(procedimiento) // -> me ahorro return, es un return -> then recibe esto
            }else {
              reject(new Error("No se pudo preparar")) // catch recibe esto
            }
          }, 3000)
    })
} 

const decorandoPastel = ( procedimiento ) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {            
            console.log("decorando pastel");
            procedimiento.decorarPastel = true
            // Ya se resolvio mi promesa
            if(procedimiento.decorarPastel){
              resolve(procedimiento) // -> me ahorro return, es un return -> then recibe esto
            }else {
              reject(new Error("No se pudo preparar")) // catch recibe esto
            }
          }, 3000)
    })
} 




const pastelAsync = async(pastel) => {

    const prepararMasa = await preparandoMasa(pastel)
    const horneandoMasa = await hornearMasa(prepararMasa)
    const decorandoPatel = await decorandoPastel(horneandoMasa)     
    return decorandoPatel

}

pastelAsync({...pastel})
.then(result => console.log(result))
.catch(err => console.log(err))
