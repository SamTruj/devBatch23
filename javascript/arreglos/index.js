//generar un numero al azar del 1-100 sin decimales
//console.log((Math.random()*100).toFixed(0))
var array = []

for (var i = 0; i < 10; i++) {
    array.push((Math.random()*100).toFixed(0))
    //revisar en la consola cada numero agregado al array
    //console.log(i + " = " + array[i])
}

console.log("Array de 10 números al azar")
console.log(array)

//----------------------------------------------------------------------------------------

var inputUser = prompt("Escribe lo que gustes separado con una coma")
var separado = inputUser.split(",")

console.log("Array de string separado por una coma")
console.log(separado)

//----------------------------------------------------------------------------------------
array =  [10,40,30,20,15,5]
var numbers = array.sort(function (a, b) {return a-b})
console.log("El " + numbers[0] + " es el numero menor del arreglo y " + numbers[numbers.length-1] + " es el mayor")