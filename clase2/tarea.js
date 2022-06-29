/**
 * Reduce 
 * 
 */


//input
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
    "Ernesto",
    "Francisco",
    "Lenny",
    "Rod",
    "Noemi",
    "Benjamin",
  ];

  
//output
//   const objeto = {
//     "Paco": 4
//   }

  //reduce es el mejor para convertir de arreglos a a objetos

//Tarea
  const objeto = nombres.reduce((acc,nombre) => ({...acc,[nombre]: nombre.length}), {})


console.log(objeto)
