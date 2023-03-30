'use sctrict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* app.get('/hola/:name/:id',(req,res)=>{
	res.status(200).send({message: `Hello ${req.params.name} con id: ${req.params.id}!`});
}) */

/* GET */
app.get('/api/v1/alimentos', (req, res) => {
	const funcion = require('./funciones/peticionesGET');
	const datos = funcion.obtenerTodosDatos();
	res.status(200).send(datos);
})

app.get('/api/v1/alimentos/lista', (req, res) => {
	const funcion = require('./funciones/peticionesGET');
	const alimentos = funcion.listaAlimentos();
	res.status(200).send(alimentos);
})

// No funciona, ARREGLAR
// app.get('/api/v1/alimentos/:productId', (req, res) => {
// 	const funcion = require('./funciones/peticionesGET');
// 	const datos = funcion.obtenerDatosPorID(req.params.productId);
// 	if (datos) {
// 		res.status(200).send(datos);
// 	} else {
// 		res.status(404).send({ message: "No encontrado" });
// 	}
// })

app.get('/api/v1/alimentos/:nombre', (req, res) => {
	const funcion = require('./funciones/peticionesGET');
	const datos = funcion.obtenerDatosPorNombre(req.params.nombre.toLocaleUpperCase());
	if (datos) {
		res.status(200).send(datos);
	} else {
		res.status(404).send({ message: "No encontrado" });
	}
})

app.get('/api/v1/alimentos/mayor/:caracteristica', (req, res) => {
	const funcion = require('./funciones/peticionesGET');
	const datos = funcion.obtenerMayor(req.params.caracteristica);
	if (datos) {
		res.status(200).send(datos);
	} else {
		res.status(404).send({ message: "No encontrado" });
	}
})

app.get('/api/v1/alimentos/menor/:caracteristica', (req, res) => {
	const funcion = require('./funciones/peticionesGET');
	const datos = funcion.obtenerMenor(req.params.caracteristica);
	if (datos) {
		res.status(200).send(datos);
	} else {
		res.status(404).send({ message: "No encontrado" });
	}
})

/* POST */
app.post('/api/v1/alimentos', (req, res) => {
	console.log(req.body);
	res.status(200).send({ message: 'El producto se ha recibido' });
})

/* PUT */
app.put('api/v1/alimentos/:productId', (req, res) => {

})

/* DELETE */
app.delete('api/v1/alimentos/:productId', (req, res) => {

})

/*  */
app.listen(port, () => {
	console.log(`API REST corriendo en http://localhost:${port}`);
})