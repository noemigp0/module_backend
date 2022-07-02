const muro = {
    construido: false,
    aplanado: false,
    pintado: false
  }
  
  // Declarando
  const construir = (muro) => {
    // Haciendo mi promesa, declarandola
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Ejecucion
        muro.construido = true
        // Ya se resolvio mi promesa
        if(muro.construido){
          resolve(muro) // -> me ahorro return, es un return -> then recibe esto
        }else {
          reject(new Error("No se pudo construit")) // catch recibe esto
        }
      }, 3000)
    })
  }

  const aplanar = (muro) => {
    // Haciendo mi promesa, declarandola
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Ejecucion
        muro.aplanado = true
        // Ya se resolvio mi promesa
        if(!muro.aplanado) {
          reject(new Error("No se pudo aplanar")) // -> me ahorro return, es un return -> then recibe esto
          return
        }
          resolve (muro) // catch recibe esto
        
      }, 3000)
    })
  }

  const pintar = (muro) => {
    // Haciendo mi promesa, declarandola
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Ejecucion
        muro.pintar = true
        // Ya se resolvio mi promesa
        if(!muro.pintar) {
          reject(new Error("No se pudo aplanar")) // -> me ahorro return, es un return -> then recibe esto
          return
        }
          resolve (muro) // catch recibe esto
        
      }, 3000)
    })
  }




  
  const muroConstruidoPromesa = construir({...muro})
//then es paral o que resuelve la promesa

  muroConstruidoPromesa
  .then((muroConstruido) =>{
    console.log(muroConstruido)
  })
  .catch((error) => console.log(error))
  
  console.log("antes del then y catch", muroConstruidoPromesa)
  
  muroConstruidoPromesa
  .then((muro) => console.log("El muro ya fue construido", muro))
  .catch((err) => console.error(err))