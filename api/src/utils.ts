import { NewDiaryEntry, Weather, Visibility } from "./types";

// Le llega un objeto del post del body del HTML que puede ser cualquier cosa
const toNewDiaryEntry = (objectFromRequest: any): NewDiaryEntry => {
    const newEntry: NewDiaryEntry = {
        comment: parseComment(objectFromRequest.comment),
        date: parseDate(objectFromRequest.date),
        weather: parseWeather(objectFromRequest.weather),
        visibility: parseVisibility(objectFromRequest.visibility),
    }
    return newEntry
}

const parseComment = (commentFromRequest: any): string => {
    // if (typeof commentFromRequest != 'string') {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment')
    }
    return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date')
    }
    return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Incorrect or missing weather')
    }
    return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Incorrect or missing visibility')
    }
    return visibilityFromRequest
}

// Hay utilidades que lo hacen, pero vamos a hacerlo a mano
const isString = (string: string): boolean => {
    // Como hay dos formas de crear strings(normal y con new String) deberiamos que comprobar las dos
    // return typeof string === 'string' || string instanceof String
    return typeof string === 'string'
}

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date))
}

const isWeather = (weather: any): boolean => {
    return Object.values(Weather).includes(weather)
}

const isVisibility = (visibility: any): boolean => {
    return Object.values(Visibility).includes(visibility)
}

export default toNewDiaryEntry
