/* if para ver si el string es un numero o no
var myString= '123'
parseInt(myString)
if(Number.isNaN(parseInt(myString))){
    console.log(myString+' es una letra')
} else {
    console.log(myString+' es un numero')
}
*/

/*
var numeros = []
var n

while (n != 0){
    n = prompt('Dame algo. Ingresa 0 para terminar la operacion:')
    if (n > 0 && parseInt(n)){
        numeros.push(n)
    }
}

console.log(numeros)
*/
 /*
var datos = ''
var n = prompt('Dame algun dato:')

while(n != null && n != ''){
    datos += ' ' + n
    n = prompt('Dame algun dato:')
}

console.log(datos)
*/
var dia

do {
    dia = (prompt("¿Qué dia es hoy?")).toLowerCase()
    switch(dia){
        case 'lunes':
            alert('lunes')
            break;
        case 'martes':
            alert('martes')
            break;
        case 'miercoles':
            alert('miercoles')
            break;
        case 'jueves':
            alert('jueves')
            break;
        case 'viernes':
            alert('viernes')
            break;
        case 'sabado':
            alert('sabado')
            break;
        case 'domingo':
            alert('Ve a descansar')
            break;
        default:
            alert('... ¿qué?')
    }
} while (dia != 'domingo');