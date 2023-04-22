"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alimentoServices_1 = require("../../src/services/alimentoServices");
describe("Server.ts tests", () => {
    test("Estructura basica de test", () => {
        expect(2 + 2).toBe(4);
    });
    // Prueba 1: Verificar que la función devuelva una matriz
    test('La función devuelve una matriz', () => {
        const resultado = (0, alimentoServices_1.obtenerlistaAlimentos)();
        expect(Array.isArray(resultado)).toBe(true);
    });
    // Prueba 2: Verificar que la matriz devuelta tenga elementos
    test('La matriz devuelta tiene elementos', () => {
        const resultado = (0, alimentoServices_1.obtenerlistaAlimentos)();
        expect(resultado.length).toBeGreaterThan(0);
    });
    // Prueba 3: Verificar que la matriz devuelta solo tenga strings
    test('La matriz devuelta solo tiene strings', () => {
        const resultado = (0, alimentoServices_1.obtenerlistaAlimentos)();
        expect(resultado.every(item => typeof item === 'string')).toBe(true);
    });
    // Prueba 4: Verificar que la matriz devuelta tenga los nombres correctos
    // test('La matriz devuelta tiene los nombres correctos', () => {
    // 	const resultado = obtenerlistaAlimentos();
    // 	const nombresEsperados = alimentos.map(alimento => alimento.alimento);
    // 	expect(resultado).toEqual(nombresEsperados);
    // });
});
