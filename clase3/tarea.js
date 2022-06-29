const fs = require('fs')
let path = "/home/noemigp/kodemia/generacion-19/module_backend/clase3/tarea"

const error = (error) => {
    if (error){
      console.log("Hay un error")
      return
    }
    console.log("Se escribio exitosamente")
  }
   

const creatingFiles = () => {
    let files = ["file1.txt", "file2.txt","file3.txt","file4.txt"]    
        if (fs.existsSync(path)){
            files.forEach(element => {
                fs.writeFile(`${path}/${element}`, `Contenido de ${element}`, "utf8", error)
            });
        } else {
            fs.mkdir(path, error =>{
                if (error) throw error;
             })            
        }     
}

creatingFiles()




  