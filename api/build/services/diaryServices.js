"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDiary = exports.getEntriesWithoutSensitiveInfo = exports.findById = exports.getEntries = void 0;
const diaries_json_1 = __importDefault(require("./diaries.json"));
// import diaryData from './datosAlimentos.json'
// diaries es un array de objetos con la interfaz DiaryEntries y cuyo valor es el json
// Ademas lo parseo a un array de DiaryEntry para obligar a TypesCript que use el tipo que yo quiero, mi interfaz.
// Es habitual hacerlo asi, porque el json podemos obtenerlo de una API externa y puede llegar cualquier cosa, asi controlamos el trato en nuestra app.
const diaries = diaries_json_1.default;
const getEntries = () => diaries;
exports.getEntries = getEntries;
const findById = (id) => {
    // el metodo find puede devolvernos un objeto o undefined. Por eso tenemos que poner que devuelve un DiaryEntry o undefined
    const entry = diaries.find(d => d.id == id);
    // Que devuelva undefined de forma explicia es bueno porque si usamos esta funcion tenemos que verificar siempre que no sea undefined antes de usar el objeto retornado
    return entry;
};
exports.findById = findById;
const getEntriesWithoutSensitiveInfo = () => {
    // Si hacemos esto nos mostrara tambien el comment porque TS no funciona en runtime, solo funciona a la hora de programar. En realidad tenemos que hacerlo a mano
    // return diaries.comment
    return diaries.map(({ id, date, weather, visibility }) => { return { id, date, weather, visibility }; });
};
exports.getEntriesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo;
// export const addDiary = (date: string, weather: Weather, visibility: Visibility, comment: string): DiaryEntry => {
const addDiary = (newDiaryEntry) => {
    // const newDiary = {
    //     // Recupero las id con el map y luego obtengo el maximo con Math.max. Le sumo uno para una nueva entrada
    //     id: Math.max(...diaries.map(d => d.id)) + 1,
    //     date,
    //     weather,
    //     visibility,
    //     comment
    // }
    const newDiary = Object.assign({ 
        // Recupero las id con el map y luego obtengo el maximo con Math.max. Le sumo uno para una nueva entrada
        id: Math.max(...diaries.map(d => d.id)) + 1 }, newDiaryEntry);
    diaries.push(newDiary);
    return newDiary;
};
exports.addDiary = addDiary;
