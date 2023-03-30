function obtenerTodosDatos() {
    const datos = require('../datos.json');
    return datos;
}

function listaProductos() {
    const datosJSON = require('../datos.json');
    let productos = [];
    datosJSON.forEach(element => {
        productos.push(element.title);
    });
    console.log(productos);
    return productos;
}

function obtenerDatosPorID(id) {
    const datosJSON = require('../datos.json');
    let datos = false;
    datosJSON.forEach(element => {
        if (element.id == id) {
            datos = element;
        }
    });
    return datos;
}
function obtenerMayor(caracteristica) {
    const datosJSON = require('../datos.json');
    let datos = datosJSON[0];
    datosJSON.forEach(element => {
        if (eval(`element.${caracteristica}`) > eval(`datos.${caracteristica}`)) {
            datos = element;
        }
    });
    return datos;
}

module.exports = { obtenerTodosDatos, listaProductos, obtenerDatosPorID, obtenerMayor };