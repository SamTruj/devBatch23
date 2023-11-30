
/*
var belleza = prompt('¿eres bellisimo/a? ')

if (belleza.toLowerCase() == 'si') {
    document.write('Ciertamente')
} else if (belleza.toLowerCase() == 'no') {
    document.write('No te creo')
} else {
    document.write('.... ¿que?')
}

document.write('<br><br><br>')
///////////////////////////////////////////////////////////////////////////
var divisible = prompt('Dame un número y te dire si es divisible entre 2')

if (divisible%2 == 0){
    document.write(divisible + ' número es divisible entre 2')
} else {
    document.write(divisible + ' número no es divisible entre 2')
}
///////////////////////////////////////////////////////////////////////////
var par = prompt('Dame un número y te dire si es par')
if (par%2 == 0) {
    alert(par + ' es un número par')
} else {
    alert(par + ' no es un número par')

}
///////////////////////////////////////////////////////////////////////////
var cliente = prompt('Ingresa tu numero de cliente')

if (cliente == 1000) {
    document.write('<h2>Ganaste un premio!!!!</h2>')
} else {
    document.write('lo sentimos cliente #' + cliente +', sigue participando')
}
//////////////////////////////////////////////////////////////////////////
var primerNumero = prompt('Dame un primer número')
var segundoNumero = prompt('Dame un segundo número')

if (primerNumero<segundoNumero) {
    document.write(primerNumero + ' es menor a ' + segundoNumero)
} else if (primerNumero>segundoNumero){
    document.write(segundoNumero + ' es menor a ' + primerNumero)
}
///////////////////////////////////////////////////////////////////////////
var tercerNumero = prompt('Dame un tercer número')

if(primerNumero > segundoNumero && primerNumero > tercerNumero){
    document.write('El primer numero, ', primerNumero, ', es mayor')
}else if((segundoNumero > primerNumero && segundoNumero > tercerNumero)){
    document.write('El segundo numero, ', segundoNumero, ', es mayor')
}else if((tercerNumero > primerNumero && tercerNumero > segundoNumero)){
    document.write('El segundo numero, ', tercerNum, ', es mayor')
}else if(primerNumero == segundoNumero || primerNumero == tercerNumero){
    document.write('Me diste 2 numeros iguales!')
}else if(segundoNumero == primerNumero || segundoNumero == tercerNumero){
    document.write('Me diste 2 numeros iguales!')
}
//////////////////////////////////////////////////////////////////////////
var dia = prompt('Ingresa un día de la semana')

if (dia.toLowerCase() == 'lunes'){
    document.write('Odio los lunes <br> - Garfield')
} else if (dia.toLowerCase() == 'viernes'){
    document.write('Ya me dio sed de la peligrosa')
} else if (dia.toLowerCase() == 'sabado' || dia.toLowerCase() == 'domingo'){
    document.write('Saca plan!!!!')
} else {
    document.write('Trabajando duro o durando en el trabajo?')
}
//////////////////////////////////////////////////////////////////////////
var calificaciones = prompt('Dame una calidicación entre 1 y 10 ')

if (calificaciones > 10 || calificaciones <= 0) {
    alert('error')
} else {
    if(calificaciones < 6){
        document.write('Reprobado')
    }else if(calificaciones <= 8 && calificaciones >= 6){
        document.write('Regular')
    }else if(calificaciones == 9){
        document.write('Bien')
    }else if(calificaciones == 10){
        document.write('Excelente')
    }
}
//////////////////////////////////////////////////////////////////////////
var topping = prompt('Aqui esta su helado, ¿que topping quiere?')

topping = topping.toLowerCase()

if (topping == 'ninguno' || topping == 'nada' || topping == 'no') {
    document.write('Son $50 pesos por favor.')
} else if (topping == 'oreo'){
    document.write('Son $50 pesos del helado más $10 del topping, por favor.')
} else if (topping == 'kitkat'){
    document.write('Son $50 pesos del helado más $15 del topping, por favor.')
} else if (topping == 'brownie'){
    document.write('Son $50 pesos del helado más $20 del topping, por favor.')
} else {
    document.write('No tenemos este topping, lo sentimos. <br> Son $50 pesos del helado, por favor.')
}
//////////////////////////////////////////////////////////////////////////
/*
/* codigo en html de los radio buttons
    <h1>Escoge las opciones para saber tu total a pagar</h1>
    <form id="programa">
        <input type="radio" name="nivel" value=4999 onclick=selectCurso(4999)> Course: $4999 MXN<br>
        <input type="radio" name="nivel" value=3999 onclick=selectCurso(3999)> Carrera $3999 MXN<br>
        <input type="radio" name="nivel" value=2999 onclick=selectCurso(2999)> Master: $2999 MXN<br>
    </form>

    <h1>¿Cuentas con una beca?</h1>
    <form id="beca">
        <input type="radio" name="porcentaje" value=".8" onclick=aplicarBeca(0.8)> Beca Facebook: 20% de descuento.<br>
        <input type="radio" name="porcentaje" value=".85" onclick=aplicarBeca(0.85)> Beca Google: 15% de descuento.<br>
        <input type="radio" name="porcentaje" value=".5" onclick=aplicarBeca(0.5)> Beca Jesua: 50% de descuento.<br>
    </form>
*/
/*
var precio
var duracion
var meses

document.write('<h1>Escoge las opciones para saber tu total a pagar</h1><form id="programa"><input type="radio" name="nivel" value=4999 onclick=selectCurso(4999)> Course: $4999 MXN<br><input type="radio" name="nivel" value=3999 onclick=selectCurso(3999)> Carrera $3999 MXN<br><input type="radio" name="nivel" value=2999 onclick=selectCurso(2999)> Master: $2999 MXN<br><br></form>')

function selectCurso(x) {
    precio = x
    if(precio == 4999){
        duracion = 'Course: 2 meses'
        meses = 2
    } else if(precio == 3999){
        duracion = 'Carrera 6 meses'
        meses = 6
    } else {
        duracion = 'Master: 12 meses'
        meses = 12
    }
    document.write('<h1>¿Cuentas con una beca?</h1><form id="beca"><input type="radio" name="porcentaje" value=".8" onclick=aplicarBeca(0.8)> Beca Facebook: 20% de descuento.<br><input type="radio" name="porcentaje" value=".85" onclick=aplicarBeca(0.85)> Beca Google: 15% de descuento.<br><input type="radio" name="porcentaje" value=".5" onclick=aplicarBeca(0.5)> Beca Jesua: 50% de descuento.</form>')
}

function aplicarBeca(x){
    document.open()
    precio = precio * x
    document.write('<h1>Tu precio mensual por tu curso sera de:</h1><h2>'+ precio +'</h2>')
    precio = precio * meses
    document.write('<h3>Precio total: '+ precio+ '</h3>')
    document.write('<h3>'+ duracion+ '</h3>')
}
//////////////////////////////////////////////////////////////////////////
*/
var vehiculo = prompt('¿Qué tipo es tu vehiculo?  Coche, moto o autobus')
var distancia = prompt('¿Cuanta fue la distancia que reccorriste?')
vehiculo = vehiculo.toLowerCase()

if (vehiculo == 'coche') {
    precio = 0.2
} else if (vehiculo == 'moto') {
    precio = 0.1
} else if (vehiculo == 'autobus') {
    precio = 0.5
}

if(distancia <= 100 && distancia > 0){
    extra = 5
    total = (precio * distancia) + extra
    document.write ('<h2>Cantidad a pagar: '+ total +'</h2>')
} else if (distancia > 100){
    extra = 10
    total = (precio * distancia) + extra
    document.write ('<h2>Cantidad a pagar: '+ total +'</h2>')
} else {
    document.write('eso no es valido')
}