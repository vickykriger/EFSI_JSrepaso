function formatearNombre(nombre){
    let palabraCambiada = nombre.charAt(0).toUpperCase()+ nombre.slice(1).toLowerCase();
    return palabraCambiada;
}


function contarLetras(texto){
    let textoSinEspacios = texto.replace(/\s+/g, '').length;
    return textoSinEspacios;
}


function maximo(a, b, c){
    let numeros = [a,b,c];
    let max = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > max) max = numeros[i];
    } 
    return max;
}


function validarPassword(password){
    let passwordBien = false;
    if(password.length >= 8 && /\d/.test(password))
    {
        passwordBien = true;
    }
    return passwordBien;
}


function sumarArray(numeros){
    let suma = 0;
    for (const num of numeros) {
        suma += num;
    }
    return suma;
}


function mayorNumero(numeros){
    let numMayor = 0;
    for (const num of numeros)
    {
        if (num > numMayor)
        {
            numMayor = num;
        }
    }
    return numMayor;
}


function obtenerPares(numeros){
    return numeros.filter(n => n % 2 === 0);
}


function descripcionUsuario(usuario){
    let texto = usuario.nombre + " tiene " + usuario.edad + " años.";
    return texto;
}


function activarUsuario(usuario){
    usuario.activo = true;
    return usuario;
}


function precioTotal(productos){
    let precioTotal = 0;
    for(const producto of productos){
        precioTotal += producto.precio;
    }
    return precioTotal;
}


function soloNombres(usuarios){
    let nombres = usuarios.map (usuario => usuario.nombre)
    return nombres;
}


function mayoresEdad(usuarios){
    return usuarios.filter(user => user.edad>=18);
}


function sumarEdad(usuarios){
    let total = usuarios.edad.reduce((acum, num) => acum + num, 0);
    return total;
}


function extraerNomPre({nombre, precio}){
    console.log("Nombre", nombre);
    console.log("Precio", precio);
}


function spreadOperator(producto){
    const productoCopia ={
        nombre: producto.nombre,
        precio: producto.precio,
        stock: 5
    };
    return productoCopia;
}


function buscarProducto(productos, nombre){
     return productos.find(producto => producto.nombre === nombre);
}