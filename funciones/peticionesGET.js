function obtenerTodosDatos() {
	const datos = require('../alimentos.json');
	return datos;
}

function listaAlimentos() {
	const datosJSON = require('../alimentos.json');
	let productos = [];
	datosJSON.forEach(element => {
		productos.push(element.Alimento);
	});
	return productos;
}

function obtenerDatosPorID(id) {
	const datosJSON = require('../alimentos.json');
	let datos = false;
	datosJSON.forEach(element => {
		if (element.id == id) {
			datos = element;
		}
	});
	return datos;
}

function obtenerDatosPorNombre(nombreAlimento) {
	const datosJSON = require('../alimentos.json');
	let datos = false;
	console.log(nombreAlimento);
	datosJSON.forEach(element => {
		if (element.Alimento == nombreAlimento) {
			datos = element;
		}
	});
	return datos;
}

function obtenerMayor(caracteristica) {
	const datosJSON = require('../alimentos.json');
	let datos = datosJSON[0];
	datosJSON.forEach(element => {
		if (eval(`element.${caracteristica}`) > eval(`datos.${caracteristica}`)) {
			datos = element;
		}
	});
	return datos;
}

function obtenerMenor(caracteristica) {
	const datosJSON = require('../alimentos.json');
	let datos = datosJSON[0];
	datosJSON.forEach(element => {
		if (eval(`element.${caracteristica}`) < eval(`datos.${caracteristica}`)) {
			datos = element;
		}
	});
	return datos;
}

module.exports = { obtenerTodosDatos, listaAlimentos, obtenerDatosPorID, obtenerDatosPorNombre, obtenerMayor, obtenerMenor };