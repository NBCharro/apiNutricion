import express from 'express' // ESModules que se usa ahora. Pero transpilara a commonjs
//const express = require(('express)) => commonjs que se usaba antes
import * as diaryServices from '../services/diaryServices'


const router = express.Router()

router.get('/', (_req, res) => {
    res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
    // Los params siempre son string, asi que hay que transformarlo a number con el +
    const diary = diaryServices.findById(+req.params.id)
    // Como hemos establecido que la funcion findById anterior puede devolver un undefined, TS autoamticamente le pone el ? (diary.)
    // porque igual no devuelve un objeto y no se puede acceder al comment
    const comentario = diary?.comment
    return diary ?
        res.send(comentario) : res.sendStatus(404)
})

router.post('/', (req, res) => {
    // De esta forma podrian pasarnos un "weather":"cualquier cosa" y aunque hayamos dicho que tiene que ser un enum, TS no funciona en runtime
    // solo funciona a la hora de programar, para ayudarnos como un lint. Las validaciones tenemos que hacerlas a mano
    // const { date, weather, visibility, comment } = req.body
    // const newDiaryEntry = diaryServices.addDiary({ date, weather, visibility, comment })
    // res.json(newDiaryEntry)
    try {
        const newDiaryEntry = toNewDiaryEntry(req.body)

        const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)

        res.json(addedDiaryEntry)
    } catch (e) {
        res.status(400).send((e as Error).message)
    }
})

export default router