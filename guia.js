function formatearNombre(nombre) {
    let palabraCambiada = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
    return palabraCambiada;
}

let aux = formatearNombre("hoLA")
console.log("El ejericio 1 es" + aux);

function contarLetras(texto) {
    let textoSinEspacios = texto.replace(/\s+/g, '').length;
    return textoSinEspacios;
}


function maximo(a, b, c) {
    let numeros = [a, b, c];
    let max = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > max) max = numeros[i];
    }
    return max;
}


function validarPassword(password) {
    let passwordBien = false;
    if (password.length >= 8 && /\d/.test(password)) {
        passwordBien = true;
    }
    return passwordBien;
}


function sumarArray(numeros) {
    let suma = 0;
    for (const num of numeros) {
        suma += num;
    }
    return suma;
}


function mayorNumero(numeros) {
    let numMayor = 0;
    for (const num of numeros) {
        if (num > numMayor) {
            numMayor = num;
        }
    }
    return numMayor;
}


function obtenerPares(numeros) {
    return numeros.filter(n => n % 2 === 0);
}


const usuario = {
    nombre: "Ana",
    edad: 20,
    activo: false
}
function descripcionUsuario(usuario) {
    let texto = usuario.nombre + " tiene " + usuario.edad + " años.";
    return texto;
}


function activarUsuario(usuario) {
    usuario.activo = true;
    return usuario;
}


const productos = [
    { nombre: "Mouse", precio: 10 },
    { nombre: "Teclado", precio: 25 },
    { nombre: "Monitor", precio: 200 }
]
function precioTotal(productos) {
    let precioTotal = 0;
    for (const producto of productos) {
        precioTotal += producto.precio;
    }
    return precioTotal;
}


const usuarios = [
    { nombre: "Ana", edad: 17 },
    { nombre: "Juan", edad: 25 },
    { nombre: "Pedro", edad: 30 }
]
function soloNombres(usuarios) {
    let nombres = usuarios.map(usuario => usuario.nombre)
    return nombres;
}


function mayoresEdad(usuarios) {
    return usuarios.filter(user => user.edad >= 18);
}


function sumarEdad(usuarios) {
    let total = usuarios.reduce((acum, u) => acum + u.edad, 0);
    return total;
}


const producto = {
    nombre: "Notebook",
    precio: 1000
}
function extraerNomPre({ nombre, precio }) {
    console.log("Nombre", nombre);
    console.log("Precio", precio);
}


function spreadOperator(producto) {
    const productoCopia = {
        nombre: producto.nombre,
        precio: producto.precio,
        stock: 5
    };
    return productoCopia;
}


function buscarProducto(productos, nombre) {
    return productos.find(producto => producto.nombre === nombre);
}


function productosCaros(productos) {
    return productosCaros = productos.filter(p => p.precio > 50);
}


function promedio(numeros) {
    const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    return promedio = suma / numeros.length;
}


const usuarios2 = [
    { id: 1, nombre: "Ana", edad: 20 },
    { id: 2, nombre: "Juan", edad: 15 },
    { id: 3, nombre: "Pedro", edad: 30 }
]
function obtenerUsuario(){
    return usuarios2;
}
function obtenerUsuarioPorId(id){
    return usuarios2.find(usuario => usuario.id === id);
}
function obtenerMayores(){
    return usuarios2.filter(u => u.edad > 18);
}
function crearUsuario(nombre, edad){
    usuarios2.push({id:4, nombre:nombre, edad:edad})
}
