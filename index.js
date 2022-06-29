// /**
//  * Hacer un funsion que reciba como parametro un nombre y me imprima, Hola {nombre}, como estas
//  */

// const miNombre = ( nombre ) => {
//     return `Hola ${nombre}, ¿Como estas?`    
// }

// console.log(miNombre("Noemi"));

// //Separar los que tienen menos de 5 letras

// const nombres = [
//     "Paco",
//     "Lorena",
//     "Kike",
//     "Abraham",
//     "Chris",
//     "Victor",
//     "Marco",
//     "Israel"
// ]


// const filterNames = ( nombres ) => {
//     let filteredNames = []
//     let excludNames = []
//     nombres.map((cv) => {
//         if ( cv.length < 5) {
//             filteredNames.push(cv)
//         } else {
//             excludNames.push(cv)
//         }
//     })
//     console.log(filteredNames);
//     console.log(excludNames);
// }

// //filterNames(nombres)

// const filterNamesAle = nombres.filter( nombre =>  nombre.length < 5)   
// const filterNamesAle2 = nombres.filter( nombre =>  nombre.length >= 5)  
// // console.log(filterNamesAle) 
// // console.log(filterNamesAle2)  


// const separar = () => {
//     let nombresMenoresArray = []
//     let nombresMayoresArray = []
  
//     nombres.forEach(nombre => {
     
//       if(nombre.length < 5) {
//         nombresMenoresArray.push(nombre);
//       } else {
//         nombresMayoresArray.push(nombre);
//       }
//     })
  
//     // Destructuracion
//     return [nombresMenoresArray, nombresMayoresArray]
//   }
  
//   // Destructuracion
//   const [nombresMenoresArray, nombresMayoresArray] = separar()
  
//   const resultado = separar()
//   console.log("resultado", resultado[0])
//   console.log("resultado", resultado[1])

  

//Imprimir en la consola/termianl, hola me llamo ${nombre} en arcoiris
// var colors = require('colors');
// let nombre = process.argv[2]

// const miNombre = (nombre) => {
//   return `Hola mi nombre es ${nombre}`.rainbow
// }
// console.log(miNombre(nombre));


// function avisar(){
//   console.log("ya llegue a la casa amma")
// }

// function irACasa(callback) {
//   console.log("Llegue a casa")
//   callback()
// }

// irACasa(avisar)


//leer archivo
const fs = require('fs')

 fs.readFile('documento.txt','utf8', (err, data) => {
  if (err) throw err; 
  console.log(data)
})

const error = (error) => {
  if (error){
    console.log("Hay un error")
    return
  }
  console.log("Se escribio exitosamente")
}

fs.writeFile("ejemplo.txt", "contenido de ejemplo.txt", "utf8", error)




fs.unlink("ejemplo.txt", (err) => {
  if (err) throw err;
  console.log('ejemplo.txt was deleted');
})

fs.mkdir("/home/noemigp/kodemia/generacion-19/module_backend/folder_nuevo", (err)=>{
  if (err) throw err;
})











 

