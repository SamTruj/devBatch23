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

//productosVendidos: [aqua, emocion, alegria, frescura]
var Juana = {
    productosVendidos: [2,1,1,1],
    gananciaGenerada: 890
}
var Pedro = {
    productosVendidos: [2,0,0,2],
    gananciaGenerada: 700
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
    //asignar dependiendo del tipo de producto vendido
    switch(precioProducto) {
        case 200: {
            vendedor.productosVendidos[0] += cantidadProducto * 1//por alguna razon aqui lo cuenta como int
            break
        }
        case 180: {
            vendedor.productosVendidos[1] += cantidadProducto * 1
            break
        }
        case 160: {
            vendedor.productosVendidos[2] += cantidadProducto * 1
            break
        }
        case 150: {
            vendedor.productosVendidos[3] += cantidadProducto * 1
            break
        }
    }
    vendedor.gananciaGenerada += cantidadProducto * precioProducto
    console.log(" ganancia: " + vendedor.gananciaGenerada + "  producto: " + vendedor.productosVendidos)
    //volver al inicio de todo
    reiniciar()
}

function reiniciar(){
    //asignar texto a h2 y p
    document.getElementById('tituloPantalla').innerText = "Inserte su operación a relizar"
    document.getElementById('parrafo').innerText = ""
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
    document.getElementById('izq_arriba').onclick = otraOperacion
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
    //boton 1
    document.getElementById('der_1').disabled = false
    document.getElementById('der_1').innerText = "Cantidad de productos de los vendedores"
    document.getElementById('der_1').onclick = function () {imprimirTotales(1)}
    //boton 2
    document.getElementById('der_2').disabled = false
    document.getElementById('der_2').innerText = "Total de dinero de los vendedores"
    document.getElementById('der_2').onclick = function () {imprimirTotales(2)}
    //boton 3
    document.getElementById('der_3').disabled = false
    document.getElementById('der_3').innerText = "Checar empleado del mes"
    document.getElementById('der_3').onclick = function () {imprimirTotales(3)}

    document.getElementById('der_4').disabled = true
    document.getElementById('der_4').innerText = ""
}

function imprimirTotales(x){
    //desabilitar los botones de la derecha
    document.getElementById('der_1').disabled = true
    document.getElementById('der_1').innerText = ""
    document.getElementById('der_2').disabled = true
    document.getElementById('der_2').innerText = ""
    document.getElementById('der_3').disabled = true
    document.getElementById('der_3').innerText = ""
    document.getElementById('der_4').disabled = true
    document.getElementById('der_4').innerText = ""
    switch(x) {
        case 1: {
            //asignar texto a los h2 y paragraph
            document.getElementById('tituloPantalla').innerText = "Total de productos vendidos"
            document.getElementById('parrafo').innerText = "Juana:\n Aqua: " + Juana.productosVendidos[0] + " Emoción: " + Juana.productosVendidos[1] + " Alegria: " + Juana.productosVendidos[2] + " Frescura: " + Juana.productosVendidos[3] + "\n\n"
            document.getElementById('parrafo').innerText += "Pedro:\n Aqua: " + Pedro.productosVendidos[0] + " Emoción: " + Pedro.productosVendidos[1] + " Alegria: " + Pedro.productosVendidos[2] + " Frescura: " + Pedro.productosVendidos[3]
            //imprimir en consola porque lo dice en la actividad
            console.log("Juana:\n Aqua: " + Juana.productosVendidos[0] + " Emoción: " + Juana.productosVendidos[1] + " Alegria: " + Juana.productosVendidos[2] + " Frescura: " + Juana.productosVendidos[3] + "\n\nPedro:\n Aqua: " + Pedro.productosVendidos[0] + " Emoción: " + Pedro.productosVendidos[1] + " Alegria: " + Pedro.productosVendidos[2] + " Frescura: " + Pedro.productosVendidos[3])
            break
        }
        case 2: {
            //asignar texto a los h2 y paragraph
            document.getElementById('tituloPantalla').innerText = "Total de ganancia"
            document.getElementById('parrafo').innerText = "Juana: " + Juana.gananciaGenerada + "\nPedro: " + Pedro.gananciaGenerada
            //imprimir en consola porque lo dice en la actividad
            console.log("Juana: " + Juana.gananciaGenerada + "\nPedro: " + Pedro.gananciaGenerada)
            break
        }
        case 3: {
            //asignar texto a los h2 y paragraph
            if (Juana.gananciaGenerada > Pedro.gananciaGenerada) {
                document.getElementById('tituloPantalla').innerText = "El empleado del mes es....\nJuana!!!"
                //imprimir en consola porque lo dice en la actividad
                console.log("El empleado del mes es....\nJuana!!!")
            } else if(Juana.gananciaGenerada < Pedro.gananciaGenerada) {
                document.getElementById('tituloPantalla').innerText = "El empleado del mes es....\nPedro!!!"
                //imprimir en consola porque lo dice en la actividad
                console.log("El empleado del mes es....\nPedro!!!")
            } else {
                document.getElementById('tituloPantalla').innerText = "El empleado del mes es....\nOh no, hay un empate!!!"
                //imprimir en consola porque lo dice en la actividad
                console.log("El empleado del mes es....\nOh no, hay un empate!!!")
            }
            break
        }
    }
}