import express from 'express'
import * as alimentoServices from '../services/alimentoServices'

const router = express.Router()

router.get('/', (_req, res) => {
	res.status(200).send(alimentoServices.obtenerTodosDatos())
})

router.get('/lista', (_req, res) => {
	res.status(200).send(alimentoServices.obtenerlistaAlimentos())
})

router.get('/id=:id', (req, res) => {
	const alimento = alimentoServices.obtenerDatosPorID(+req.params.id)
	return alimento ?
		res.send(alimento) : res.status(404).send({ message: "Alimento no encontrado" })
})

router.get('/nombre=:nombreAlimento', (req, res) => {
	const alimento = alimentoServices.obtenerAlimentosPorNombre(req.params.nombreAlimento);
	return alimento && alimento.length >= 1 ?
		res.send(alimento) : res.status(404).send({ message: "Alimento no encontrado" })
})

router.get('/mayor/:caracteristica', (req, res) => {
	const alimento = alimentoServices.obtenerMayor(req.params.caracteristica)
	return alimento ?
		res.send(alimento) : res.status(404).send({ message: "Alimento no encontrado" })
})

router.get('/menor/:caracteristica', (req, res) => {
	const alimento = alimentoServices.obtenerMenor(req.params.caracteristica)
	return alimento ?
		res.send(alimento) : res.status(404).send({ message: "Alimento no encontrado" })
})

export default router