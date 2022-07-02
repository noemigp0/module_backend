
/*
1.- Vamos a escribir un archivo --> write file
2.- Vamos a hacer un append con una linea nueva a este mismo archivo ---> appendchild
3.- Vamos el archivo despues de 5s --> unlink .--Z settimeou
*/



// fsPromises.writeFile(ruta, "Hola soy un archivo nuevo", "utf-8")
// .then(()=>{
//     console.log("Se escribrio exitosamente el archivo");
// })
// .catch(err => console.log("Sucedio un error", err))


/*
Reglas
1.- Si se quiere usar el async, se tiene que hacer una funcion asincrona
2.- El await va dentro de esa funcion asincrona, si no esta el async, no se puede usar await
3.- El await espera una promesa
4.- La funcion async/WAIT RETORNA UNA PROMESA
5.- Si retornamos nuestra funcion asincrona y queremos usar el valor afuera
*/

const fsPromises = require('fs/promises')
const ruta = "archivo-nuevo.txt"
const crearArchivo = async () => {
  await fsPromises.writeFile(ruta, "Hola soy un archivo nuevo", "utf-8")  
}
//crearArchivo()

//2.- Vamos a hacer un append con una linea nueva a este mismo archivo ---> appendchild
const escribirArchivo = async () => {
    await fsPromises.appendFile(ruta, "\nLinea nueva","utf-8")
}
escribirArchivo()
//3.-Vamos a borrar el archivo despues de 5s. -> unlink -> setTimeout

const eliminarArchivo = async() => {    
        await fsPromises.unlink(ruta)   
}


setTimeout(() => {
    eliminarArchivo()
}, 5000);
