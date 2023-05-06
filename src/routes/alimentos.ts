import express from 'express'
import * as alimentoServices from '../services/alimentoServices'

const router = express.Router()


/**
 * Get track
 * @openapi
 * /api/v1/:
 *    get:
 *      summary: "Obtener todos los alimentos"
 *      description: Devuelve todos los datos disponibles 
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/alimento"
 *      responses:
 *        '200':
 *          description: Success
 */
router.get('/', (_req, res) => {
	res.status(200).send(alimentoServices.obtenerTodosDatos())
})

/**
 * Get track
 * @openapi
 * /api/v1/lista:
 *    get:
 *      summary: "Obtener lista de los alimentos"
 *      description: Devuelve una lista con todos los alimentos de la API 
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/listaAlimentos"
 *      responses:
 *        '200':
 *          description: Success
 */
router.get('/lista', (_req, res) => {
	res.status(200).send(alimentoServices.obtenerlistaAlimentos())
})

/**
 * Get track
 * @openapi
 * /api/v1/id={id}:
 *    get:
 *      summary: "Obtener alimentos por ID"
 *      description: Permite buscar datos por ID 
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/listaAlimentos"
 *      responses:
 *        '200':
 *          description: Success
 * 	  '404':
 * 		 description: Alimento no encontrado
 */
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
