import { Alimento } from '../types'
import datosAlimentos from './datosAlimentos.json'

const alimentos: Alimento[] = datosAlimentos as Alimento[]

export const obtenerTodosDatos = (): Alimento[] => alimentos

export const obtenerlistaAlimentos = (): string[] => {
	let listaNombresAlimentos: string[] = [];
	alimentos.forEach(alimento => {
		listaNombresAlimentos.push(alimento.alimento);
	});
	return listaNombresAlimentos;
}

export const obtenerDatosPorID = (id: number): Alimento | undefined => {
	const alimento = alimentos.find(d => d.id == id)
	return alimento
}

export const obtenerAlimentosPorNombre = (nombreAlimento: string): Alimento[] => {
	let alimento: Alimento[] = [];
	alimentos.forEach(element => {
		if (element.alimento == nombreAlimento) {
			alimento.push(element);
		} else if (element.alimento.includes(nombreAlimento)) {
			alimento.push(element);
		}
	});
	return alimento;
}

export const obtenerMayor = (caracteristica: string): Alimento => {
	let alimento = alimentos[0];
	alimentos.forEach(element => {
		if (
			eval(`element.${caracteristica}`) > eval(`alimento.${caracteristica}`)
			|| eval(`element.lipidos.${caracteristica}`) > eval(`alimento.lipidos.${caracteristica}`)
			|| eval(`element.minerales.${caracteristica}`) > eval(`alimento.minerales.${caracteristica}`)
			|| eval(`element.vitaminas.${caracteristica}`) > eval(`alimento.vitaminas.${caracteristica}`)
		) {
			alimento = element;
		}
	});
	return alimento;
}

export const obtenerMenor = (caracteristica: string): Alimento => {
	let alimento = alimentos[0];
	alimentos.forEach(element => {
		if (
			eval(`element.${caracteristica}`) < eval(`alimento.${caracteristica}`)
			|| eval(`element.lipidos.${caracteristica}`) < eval(`alimento.lipidos.${caracteristica}`)
			|| eval(`element.minerales.${caracteristica}`) < eval(`alimento.minerales.${caracteristica}`)
			|| eval(`element.vitaminas.${caracteristica}`) < eval(`alimento.vitaminas.${caracteristica}`)
		) {
			alimento = element;
		}
	});
	return alimento;
}
