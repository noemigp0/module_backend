//console.log(process.argv)

//Generar un script que reciba parametros y nos diga si el nombre esta en el arreglo nombres, si si esta 
//que nos imprima si estas y si no que imprima fuera de aqui

const nombres = [
    "Paco",
    "Lorena",
    "Kike",
    "Abraham",
    "Cris",
    "Victor",
    "Marco",
    "Israel",
    "Annie",
    "Ërnesto",
    "Francisco",
    "Lenny",
    "Rod",
    "Noemi",
    "Benjamin",
  ];

let nombre = "Noemi"

const findName = ( names = [], nameParam ) => {
    let result =""
    names.forEach((name, index, array) => {   
        
       
         if( nameParam === name) {
             return `${nameParam} estas en el arreglo`
         } else {
            result = `estas fuera del arreglo`
         }
    })

  return result
}

console.log(findName(nombres, nombre));