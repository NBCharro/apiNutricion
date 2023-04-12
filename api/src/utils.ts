import { NewDiaryEntry } from "./types";

// Le llega un objeto del post del body del HTML que puede ser cualquier cosa
const toNewDiaryEntry = (objectFromRequest: any): NewDiaryEntry => {
    const newEntry: NewDiaryEntry = {
        comment: parseComment(objectFromRequest.comment)
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

// Hay utilidades que lo hacen, pero vamos a hacerlo a mano
const isString = (string: string): boolean => {
    // Como hay dos formas de crear strings(normal y con new String) deberiamos que comprobar las dos
    // return typeof string === 'string' || string instanceof String
    return typeof string === 'string'
}

export default toNewDiaryEntry
