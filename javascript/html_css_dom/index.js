/*  Cambiar texto dentro de un boton
const boitonJuana = document.getElementById("izq_arriba").innerText = "hola"
*/

/*desabilitar un boton
   const btncompra = document.getElementById('place_order');
   btncompra.disabled = true; 
*/

/*Asignar una funcion diferente a un boton sin y con parametros
document.getElementById('izq_arriba').onclick = otraFuncion;
document.getElementById('izq_arriba').onclick = function () {asignarVenta(Juana)}
*/

//añadir boton de cancelar en venta
//añadir parseInt para cantidad de productos

var precioProducto = 0, cantidadProducto = 0

var Juana = {
    productosVendidos: [0,0,0,0],
    gananciaGenerada: 0
}
var Pedro = {
    productosVendidos: 0,
    gananciaGenerada: 0
}

function ventaProducto(x) {
    //agarrar el precio del producto
    precioProducto = x;
    //desabilitar y limpiar de texto los botones inutiles
    document.getElementById('der_1').disabled = true
    document.getElementById('der_1').innerText = ""
    document.getElementById('der_2').disabled = true
    document.getElementById('der_2').innerText = ""
    document.getElementById('der_3').disabled = true
    document.getElementById('der_3').innerText = ""
    //asignar el boton de cancelar la operacion
    document.getElementById('der_4').disabled = false
    document.getElementById('der_4').innerText = "Cancelar"
    document.getElementById('der_4').onclick = reiniciar
    //asignar texto al h2
    document.getElementById('tituloPantalla').innerText = "Selecciona el vendedor"
    //asignar los valores de los botones correctos y sus funciones
    document.getElementById('izq_abajo').disabled = false
    document.getElementById('izq_arriba').innerText = "Juana"
    document.getElementById('izq_abajo').innerText = "Pedro"
    document.getElementById('izq_arriba').onclick = function () {asignarVenta(Juana)}
    document.getElementById('izq_abajo').onclick = function () {asignarVenta(Pedro)}
}

function asignarVenta(vendedor){
    cantidadProducto = prompt('¿Cuanta fue la cantidad de producto vendido?')
    vendedor.productosVendidos += cantidadProducto * 1 //por alguna razon aqui lo cuenta como int
    vendedor.gananciaGenerada += cantidadProducto * precioProducto
    console.log(" ganancia: " + vendedor.gananciaGenerada + "  producto: " + vendedor.productosVendidos)
    //volver al inicio de todo
    reiniciar()
}

function reiniciar(){
    //asignar texto a h2
    document.getElementById('tituloPantalla').innerText = "Inserte su operación a relizar"
    //asignar texto, valores y funcion a los botones de la derecha
    document.getElementById('der_1').disabled = false
    document.getElementById('der_1').innerText = "Venta de Aqua"
    document.getElementById('der_1').onclick = function () {ventaProducto(200)}
    document.getElementById('der_2').disabled = false
    document.getElementById('der_2').innerText = "Venta de Emoción"
    document.getElementById('der_2').onclick = function () {ventaProducto(180)}
    document.getElementById('der_3').disabled = false
    document.getElementById('der_3').innerText = "Venta de Alegria"
    document.getElementById('der_3').onclick = function () {ventaProducto(160)}
    document.getElementById('der_4').disabled = false
    document.getElementById('der_4').innerText = "Venta de Frescura"
    document.getElementById('der_4').onclick = function () {ventaProducto(150)}
    //asignar texto, valores y funcion a los botones de la izquierda
    document.getElementById('izq_arriba').disabled = false
    document.getElementById('izq_arriba').innerText = "¿Otra operación?"
    document.getElementById('izq_abajo').disabled = true
    document.getElementById('izq_abajo').innerText = ""
}

function otraOperacion(){
    //crear boton de cancelar
    document.getElementById('izq_abajo').disabled = false
    document.getElementById('izq_abajo').innerText = "Cancelar"
    document.getElementById('izq_abajo').onclick = reiniciar
    //asignar texto, valores y funciones a botones de la izquierda
    document.getElementById('izq_arriba').disabled = true
    document.getElementById('izq_arriba').innerText = ""
    //asignar texto, valores y funciones a botones de la derecha
    document.getElementById('der_1').disabled = false
    document.getElementById('der_1').innerText = "Cantidad de productos de los vendedores"
    document.getElementById('der_2').disabled = false

    document.getElementById('der_2').innerText = "Total de dinero de los vendedores"
    document.getElementById('der_3').disabled = false

    document.getElementById('der_3').innerText = "Checar empleado del mes"

    document.getElementById('der_4').disabled = true
    document.getElementById('der_4').innerText = ""
}