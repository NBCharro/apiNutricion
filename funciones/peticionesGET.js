function obtenerTodosDatos() {
	const datos = require('../datosAlimentos.json');
	return datos;
}

function listaAlimentos() {
	const datosJSON = require('../datosAlimentos.json');
	let alimentos = [];
	datosJSON.forEach(element => {
		alimentos.push(element.alimento);
	});
	return alimentos;
}

function obtenerDatosPorID(id) {
	const datosJSON = require('../datosAlimentos.json');
	let datos = false;
	datosJSON.forEach(element => {
		if (element.id == id) {
			datos = element;
		}
	});
	return datos;
}

function obtenerDatosPorNombre(nombreAlimento) {
	const datosJSON = require('../datosAlimentos.json');
	let datos = false;
	datosJSON.forEach(element => {
		if (element.alimento == nombreAlimento) {
			datos = element;
		}
	});
	return datos;
}

function obtenerMayor(caracteristica) {
	const datosJSON = require('../datosAlimentos.json');
	let datos = datosJSON[0];
	datosJSON.forEach(element => {
		if (
			eval(`element.${caracteristica}`) > eval(`datos.${caracteristica}`)
			|| eval(`element.lipidos.${caracteristica}`) > eval(`datos.lipidos.${caracteristica}`)
			|| eval(`element.minerales.${caracteristica}`) > eval(`datos.minerales.${caracteristica}`)
			|| eval(`element.vitaminas.${caracteristica}`) > eval(`datos.vitaminas.${caracteristica}`)
			) {
			datos = element;
		}
	});
	return datos;
}

function obtenerMenor(caracteristica) {
	const datosJSON = require('../datosAlimentos.json');
	let datos = datosJSON[0];
	datosJSON.forEach(element => {
		if (eval(`element.${caracteristica}`) < eval(`datos.${caracteristica}`)) {
			datos = element;
		}
	});
	return datos;
}

module.exports = { obtenerTodosDatos, listaAlimentos, obtenerDatosPorID, obtenerDatosPorNombre, obtenerMayor, obtenerMenor };