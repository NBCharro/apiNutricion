// Esto es una simulacion de obtencion de un json. En este caso es mediante un archivo pero podria ser
// un fetch, una consulta a una DB, etc. Usamos un json ahora por simplicidad.
import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'
// import diaryData from './datosAlimentos.json'

// diaries es un array de objetos con la interfaz DiaryEntries y cuyo valor es el json
// Ademas lo parseo a un array de DiaryEntry para obligar a TypesCript que use el tipo que yo quiero, mi interfaz.
// Es habitual hacerlo asi, porque el json podemos obtenerlo de una API externa y puede llegar cualquier cosa, asi controlamos el trato en nuestra app.
const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): DiaryEntry | undefined => {
    // el metodo find puede devolvernos un objeto o undefined. Por eso tenemos que poner que devuelve un DiaryEntry o undefined
    const entry = diaries.find(d => d.id == id)
    // Que devuelva undefined de forma explicia es bueno porque si usamos esta funcion tenemos que verificar siempre que no sea undefined antes de usar el objeto retornado
    return entry

}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
    // Si hacemos esto nos mostrara tambien el comment porque TS no funciona en runtime, solo funciona a la hora de programar. En realidad tenemos que hacerlo a mano
    // return diaries.comment
    return diaries.map(({ id, date, weather, visibility }) => { return { id, date, weather, visibility } })
}

// export const addDiary = (date: string, weather: Weather, visibility: Visibility, comment: string): DiaryEntry => {
export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
    // const newDiary = {
    //     // Recupero las id con el map y luego obtengo el maximo con Math.max. Le sumo uno para una nueva entrada
    //     id: Math.max(...diaries.map(d => d.id)) + 1,
    //     date,
    //     weather,
    //     visibility,
    //     comment
    // }
    const newDiary = {
        // Recupero las id con el map y luego obtengo el maximo con Math.max. Le sumo uno para una nueva entrada
        id: Math.max(...diaries.map(d => d.id)) + 1,
        ...newDiaryEntry
    }

    diaries.push(newDiary)
    return newDiary
}
