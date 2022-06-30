/**
 * 
 * Callbacks
 */
 const muro = {
    estaConstruido:false, // Paso 1
    estaAplanado:false, // Paso 2
    estaPintado:false // Paso 3
  }
  
  // function construir(muroAConstruir) {
  //   muroAConstruir.estaConstruido = true
  //   return muroAConstruir
  // }
  
  // function aplanar(muroAAplanar) {
  //   muroAAplanar.estaAplanado = true
  //   return muroAAplanar
  // }
  
  // function pintar(muroAPintar) {
  //   muroAPintar.estaPintado = true
  //   return muroAPintar
  // }
  
  // -> Referencia
  // -> Valor
  // construir(muro) // -> Spread operator : copy
  // console.log("muro", muro)
  // const muroAplanado = aplanar(muroConstruido)
  // const muroPintado = pintar(muroAplanado)
  
  
  // setTimeout -> simular asincronia
  
  /*
  * Paso 1 -> Construir
  * Paso 2 -> Aplanar
  * Paso 3 -> Pintar
  */
  
  setTimeout(() => {
    console.log("apenaaaas voy a construir")
    construir({...muro}, aplanar)
  }, 3000)
  
  const aplanar = (muroAAplanar, pintar) => {
    muroAAplanar.estaAplanado = true // -> Paso 2
    pintar(muroAAplanar)
  }
  console.log("ya se declaro aplanar")
  
  const pintar = (muroAPintar) => {
    muroAPintar.estaPintado = true
    console.log("exito", muroAPintar)
  }
  console.log("ya se declaro pintar")
  
  const construir = (muroAConstruir, aplanar) => {
    let error = null
    muroAConstruir.estaConstruido = false // -> Paso 1
    if(!muroAConstruir.estaConstruido) {
      error = "El muro no fue construido"
      console.log("error", error)
      return
    } 
    aplanar(muroAConstruir, pintar) // -> izq: el resultado del paso pasado, der: la declaracion del paso que sigue
  }
  console.log("ya se declaro construit")
  
  
  
  
  // Despues
  
  
  
  // Ese mismo muro, lo necesito aplanar