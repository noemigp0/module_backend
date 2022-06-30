/*

1.- Preparar la masa
2.- Hornear la masa
3.- Decorarla
*/

const pastel = {
    preparaMasa: false,
    hornearMasa: false,
    decorarPastel: false
}

const decorarPatel = (pastelADecorar) => {
    console.log("Decorando pastel...");
    pastelADecorar.decorarPastel = true
    if(!pastelADecorar.decorarPastel){
        console.log("El pasten no esta decorado");
        return
    }
    console.log("Terminamos el pastel");

}

const hornearMasa = (masaAHornear, decorarPastel) => {
    console.log("Horneando masa...");
    masaAHornear.hornearMasa = true
    if(!masaAHornear.hornearMasa){
        console.log("La masa no esta horneada")
        return
    }
    decorarPastel(masaAHornear)

}

const preparandoMasa = (masaAPreparar, hornearMasa) => {
    console.log("Iniciando proceso de pastel. preparando masa...");
    masaAPreparar.hornearMasa = true
    if(!masaAPreparar.hornearMasa){
        console.log("La masa no esta preparada")
        return
    }
    hornearMasa(masaAPreparar, decorarPatel)
}

setTimeout(() => {
    preparandoMasa(pastel,hornearMasa)
}, 2000);