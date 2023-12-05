//1. Pedir un numero al usuario, y ostrar desde el 1 al n los multiplos de 5
var num = prompt('Dame un numero entero:')
n = 1
divisibles = []

while (n <= num){
    res = n % 5
    if(res == 0){
        divisibles.push(n)
    }
    n++
}

console.log(divisibles)

//2. Solicita al usuario 2 numeros entre 1 y 50. Mostrar los numeros del 1 al 50, pero con el mensaje de "loteria!" en los numeros dados por el usuario
var num1 = prompt('Dame dos numeros enteros entre 1 y el 50. Primer numero:')
var num2 = prompt('Dame el segundo num:')
n = 1

while (n <= 50){
    if(n == num1 || n == num2){
        console.log(n + " Loteria!!!!")
    } else {
        console.log(n)
    }
    n++
}

//3. Pedir al usuario numeros. Guardarlos en array hasta que este introduzca el num 0. Mostramos el array al temrinar
/* if para ver si el string es un numero o no
var myString= '123'
parseInt(myString)
if(Number.isNaN(parseInt(myString))){
    console.log(myString+' es una letra')
} else {
    console.log(myString+' es un numero')
}
*/

var numeros = []
var n

while (n != 0){
    n = prompt('Dame algo. Ingresa 0 para terminar la operacion:')
    if (n > 0 && parseInt(n)){
        numeros.push(n)
    }
}

console.log(numeros)

//4. Pedir al usuario datos, guardarlos hasta que el usuario no ingrese nada y finalmente mostrarlos

var datos = ''
var n = prompt('Dame algun dato:')

while(n != null && n != ''){
    datos += ' ' + n
    n = prompt('Dame algun dato:')
}

console.log(datos)

//5. Pedir al usuario un dia de la semana. Mostrar alerta personalizado por cada uno. En caso de introducir domingo, mostrar "ve a descansar" por medio de alert y terminar

var dia

do {
    dia = (prompt("¿Qué dia es hoy?")).toLowerCase()
    switch(dia){
        case 'lunes':
            alert('Sumergirme en mi propia miseria')
            break;
        case 'martes':
            alert('Contemplar el abismo')
            break;
        case 'miercoles':
            alert('Solucionar la hambruna mundial sin decírselo a nadie')
            break;
        case 'jueves':
            alert('Danza y ejercicio')
            break;
        case 'viernes':
            alert('Cena conmigo (NO CANCELAR)')
            break;
        case 'sabado':
            alert('Luchar con el odio que me tengo')
            break;
        case 'domingo':
            alert('Ve a descansar')
            break;
        default:
            alert('... ¿qué?')
    }
} while (dia != 'domingo');