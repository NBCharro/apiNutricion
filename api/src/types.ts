// Ahora vamos a definir los tipos

// weather en el diaries.json quiero que sea un enum de unos determinados valores
// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export enum Weather {
    Sunny = 'sunny',
    Rainy = 'rainy',
    Cloudy = 'cloudy',
    Windy = 'windy',
    Stormy = 'stormy'
}

// visibility en el diaries.json quiero que sea un enum de unos determinados valores
// export type Visibility = 'great' | 'good' | 'ok' | 'poor'
export enum Visibility {
    Great = 'great',
    Good = 'good',
    Ok = 'ok',
    Poor = 'poor'
}

// Creamos una interfaz para los objetos de diaries.json
export interface DiaryEntry {
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string,
}

// Si queremos ocultar algun parametro de la interfaz. Es mejor reutilizar tipos, por eso lo hacemos asi en lugar de crear uno nuevo.
// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
