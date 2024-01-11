function retornarPila(){
    let userInput = prompt("Escribe los valores separados con una coma")

    let retornar = prompt("Cantidad de valores a retornar")
    
    let pila = userInput.replace("[", "").replace("]", "").split(",")
    
    while (pila.length < retornar){
        alert("Número invalido, ingresa un numero menor que la cantidad de datos")
        retornar = prompt("Cantidad de valores a retornar")
    }
    
    document.write(pila.slice(0,retornar))
}

function Reemplazar(){
    let userInput = prompt("Escribe tus numeros separados con comas")
    let userRemplazo = prompt("Que numero lo reemplazara?")
    let userRemplazable = prompt("Que numero sera reemplazado?")

    var pilaRemplazable = userInput.split(",").map(function(item){
        return parseInt(item, 10)
    })

    let remplazable = parseInt(userRemplazable)
    let remplazo = parseInt(userRemplazo)

    console.log("antes " + pilaRemplazable)
    //aqui se remplaza el elemento más nuevo por el que dijo el usuario
    i = pilaRemplazable.length
    while (i > -1){
        if(pilaRemplazable[i] == remplazable){
            //console.log("antes " + pilaRemplazable[i])
            pilaRemplazable[i] = remplazo
            //console.log("despues " + pilaRemplazable[i])
            break
        }
        i -= 1
    }
    console.log("despues " + pilaRemplazable)
    //borramos todos los elementos nuevos hasta llegar al remplazado

    for(var j = (pilaRemplazable.length - i)-1; j--;){
        pilaRemplazable.pop()
    }

    document.write(pilaRemplazable)
}

Reemplazar()