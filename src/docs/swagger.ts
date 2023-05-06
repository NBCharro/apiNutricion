import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
	openapi: "3.0.0",
	info: {
		title: "Alimentos API",
		version: "1.0.0",
		"description": "La Alimentos API es una API que permite obtener información nutricional de diferentes alimentos.\n\n_Entre los nutrientes que se pueden obtener se incluyen: Kcal, agua, hierro, vitamina B5, grasa animal y vegetal, proteína vegetal y animal, entre otros._\n\nEnlaces utiles:\n- [Repositorio API en Github](https://github.com/NBCharro/apiNutricion)\n- [Github](https://github.com/NBCharro)\n- [Portfolio](https://www.nbcharro.com/)",
	},
	servers: [
		{
			url: "https://api-nutricion.onrender.com/api/v1/",
		},
	],
	components: {
		schemas: {
			alimento: {
				type: "object",
				required: ["id", "alimento", "poderCalorifico", "kcal", "agua", "carboHidratos", "colesterol", "fibra", "proteina", "lipidos", "minerales", "vitaminas"],
				properties: {
					id: {
						type: "integer",
						format: "int64",
						example: 1
					},
					alimento: {
						type: "string",
						example: "aceite de coco",
					},
					poderCalorifico: {
						type: "integer",
						format: "int64",
						example: 100,
					},
					kcal: {
						type: "integer",
						format: "int64",
						example: 900,
					},
					agua:
					{
						type: "integer",
						format: "int64",
						example: 0.001,
					},
					carboHidratos:
					{
						type: "integer",
						format: "int64",
						example: 0,
					},
					colesterol: {
						type: "integer",
						format: "int64",
						example: 0,
					},
					fibra:
					{
						type: "integer",
						format: "int64",
						example: 0,
					},
					proteina:
					{
						type: "object",
						required: ["animal", "vegetal"],
						properties:
						{
							animal: {
								type: "integer",
								format: "int64",
								example: 0,
							},
							vegetal: {
								type: "integer",
								format: "int64",
								example: 0,
							}
						},
					},
					lipidos:
					{
						type: "object",
						required: ["grasa", "saturada", "monoinsaturada", "poliinsaturada"],
						properties:
						{
							grasa: {
								type: "integer",
								format: "int64",
								example: 0,
							},
							saturada: {
								type: "integer",
								format: "int64",
								example: 0,
							},
							monoinsaturada: {
								type: "integer",
								format: "int64",
								example: 0,
							},
							poliinsaturada: {
								type: "integer",
								format: "int64",
								example: 0,
							}
						},
					},
					minerales:
					{
						type: "object",
						required: ["calcio", "potasio", "fosforo", "cobre", "yodo", "selenio", "cloro", "hierro", "sodio", "zinq", "magnesio", "manganeso"],
						properties:
						{
							calcio: {
								type: "integer",
								format: "int64",
								example: 0,
							},
							potasio: {
								type: "integer",
								format: "int64",
								example: 0,
							},
							fosforo: {
								type: "integer",
								format: "int64",
								example: 0,
							},
							cobre: {
								type: "integer",
								format: "int64",
								example: 0,
							},
							yodo: {
								type: "integer",
								format: "int64",
								example: 0,
							},
							selenio: {
								type: "integer",
								format: "int64",
								example: 0,
							},
							cloro: {
								type: "integer",
								format: "int64",
								example: 0,
							},
							hierro: {
								type: "integer",
								format: "int64",
								example: 0,
							},
							sodio: {
								type: "integer",
								format: "int64",
								example: 0,
							},
							zinq: {
								type: "integer",
								format: "int64",
								example: 0,
							},
							magnesio: {
								type: "integer",
								format: "int64",
								example: 0,
							},
							manganeso: {
								type: "integer",
								format: "int64",
								example: 0,
							}
						},
					},
					vitaminas:
					{
						type: "object",
						required: ["b1", "b2", "b3", "b5", "b6", "b8", "b9", "b12", "c", "d", "a", "e"],
						properties:
						{
							b1: {
								type: "integer",
								format: "int64",
								example: 0,
							},
							b2: {
								type: "integer",
								format: "int64",
								example: 0,
							},
							b3: {
								type: "integer",
								format: "int64",
								example: 0,
							},
							b5: {
								type: "integer",
								format: "int64",
								example: 0,
							},
							b6: {
								type: "integer",
								format: "int64",
								example: 0,
							},
							b8: {
								type: "integer",
								format: "int64",
								example: 0,
							},
							b9: {
								type: "integer",
								format: "int64",
								example: 0,
							},
							b12: {
								type: "integer",
								format: "int64",
								example: 0,
							},
							c: {
								type: "integer",
								format: "int64",
								example: 0,
							},
							d: {
								type: "integer",
								format: "int64",
								example: 0,
							},
							a: {
								type: "integer",
								format: "int64",
								example: 0,
							},
							e: {
								type: "integer",
								format: "int64",
								example: 0,
							}
						}
					},
				},
			},
			listaAlimentos: {
				type: "array",
				example: ["aceite de coco", "aceite de girasol", "aceite de oliva", "aceite de palma", "aceituna negra"],
			},
		},
	},
};

const swaggerOptions: OAS3Options = {
	swaggerDefinition,
	// Busca los comentarios de las rutas para crear la documentacion
	apis: ["./src/routes/*.ts"],
};

export default swaggerJSDoc(swaggerOptions);