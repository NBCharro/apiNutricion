"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerMenor = exports.obtenerMayor = exports.obtenerAlimentosPorNombre = exports.obtenerDatosPorID = exports.obtenerlistaAlimentos = exports.obtenerTodosDatos = void 0;
const datosAlimentos_json_1 = __importDefault(require("./datosAlimentos.json"));
const alimentos = datosAlimentos_json_1.default;
const obtenerTodosDatos = () => alimentos;
exports.obtenerTodosDatos = obtenerTodosDatos;
const obtenerlistaAlimentos = () => {
    let listaNombresAlimentos = [];
    alimentos.forEach(alimento => {
        listaNombresAlimentos.push(alimento.alimento);
    });
    return listaNombresAlimentos;
};
exports.obtenerlistaAlimentos = obtenerlistaAlimentos;
const obtenerDatosPorID = (id) => {
    const alimento = alimentos.find(d => d.id == id);
    return alimento;
};
exports.obtenerDatosPorID = obtenerDatosPorID;
const obtenerAlimentosPorNombre = (nombreAlimento) => {
    let alimento = [];
    alimentos.forEach(element => {
        if (element.alimento == nombreAlimento) {
            alimento.push(element);
        }
        //  else if (element.alimento.includes(nombreAlimento)) {
        // 	alimento.push(element);
        // }
    });
    return alimento;
};
exports.obtenerAlimentosPorNombre = obtenerAlimentosPorNombre;
const obtenerMayor = (caracteristica) => {
    let alimento = alimentos[0];
    alimentos.forEach(element => {
        if (eval(`element.${caracteristica}`) > eval(`alimento.${caracteristica}`)
            || eval(`element.lipidos.${caracteristica}`) > eval(`alimento.lipidos.${caracteristica}`)
            || eval(`element.minerales.${caracteristica}`) > eval(`alimento.minerales.${caracteristica}`)
            || eval(`element.vitaminas.${caracteristica}`) > eval(`alimento.vitaminas.${caracteristica}`)) {
            alimento = element;
        }
    });
    return alimento;
};
exports.obtenerMayor = obtenerMayor;
const obtenerMenor = (caracteristica) => {
    let alimento = alimentos[0];
    alimentos.forEach(element => {
        if (eval(`element.${caracteristica}`) < eval(`alimento.${caracteristica}`)
            || eval(`element.lipidos.${caracteristica}`) < eval(`alimento.lipidos.${caracteristica}`)
            || eval(`element.minerales.${caracteristica}`) < eval(`alimento.minerales.${caracteristica}`)
            || eval(`element.vitaminas.${caracteristica}`) < eval(`alimento.vitaminas.${caracteristica}`)) {
            alimento = element;
        }
    });
    return alimento;
};
exports.obtenerMenor = obtenerMenor;
