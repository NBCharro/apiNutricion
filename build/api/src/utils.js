"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
// Le llega un objeto del post del body del HTML que puede ser cualquier cosa
const toNewDiaryEntry = (objectFromRequest) => {
    const newEntry = {
        comment: parseComment(objectFromRequest.comment),
        date: parseDate(objectFromRequest.date),
        weather: parseWeather(objectFromRequest.weather),
        visibility: parseVisibility(objectFromRequest.visibility),
    };
    return newEntry;
};
const parseComment = (commentFromRequest) => {
    // if (typeof commentFromRequest != 'string') {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment');
    }
    return commentFromRequest;
};
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date');
    }
    return dateFromRequest;
};
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Incorrect or missing weather');
    }
    return weatherFromRequest;
};
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Incorrect or missing visibility');
    }
    return visibilityFromRequest;
};
// Hay utilidades que lo hacen, pero vamos a hacerlo a mano
const isString = (string) => {
    // Como hay dos formas de crear strings(normal y con new String) deberiamos que comprobar las dos
    // return typeof string === 'string' || string instanceof String
    return typeof string === 'string';
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const isWeather = (weather) => {
    return Object.values(types_1.Weather).includes(weather);
};
const isVisibility = (visibility) => {
    return Object.values(types_1.Visibility).includes(visibility);
};
exports.default = toNewDiaryEntry;
