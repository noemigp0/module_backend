const http = require("http")

const server = http.createServer((request, response) => {
    //Escribiendo
    response.write("Hola desde mi servidor, Hola mundo")
    //Acabar
    response.end() //return de los servidores
})

//Listening
//1.- Puerto
//2.- callback
server.listen(8080, () => {
    console.log("Mi servidor esta escuchando")
} )