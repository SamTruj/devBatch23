let COLORES = ['Rojo', 'Amarillo', 'Verde']
const semaforoImagen = document.querySelector('#semaforo-img')

const colorSemaforo = function (){
    let color = COLORES.pop()
    console.log(color)
    if(COLORES.length === 0){
        COLORES = ['Rojo', 'Amarillo', 'Verde']
    }
    semaforoImagen.src = './img/Semaforo_'+color+'.png'
    return color
}

let identificador = setInterval(colorSemaforo, 3000)
console.log(identificador)

/*
    <img src="./img/Semaforo_Amarillo.png" alt="">
*/