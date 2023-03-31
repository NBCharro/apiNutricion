function guardarAlimentoNuevo(alimentoNuevo) {
    const fs = require('fs');
    const alimentos = require('../datosAlimentos.json');
    const ultimoID = obtenerUltimoID();
    alimentos.push(
        {
            "id": ultimoID,
            "alimento": alimentoNuevo.alimento.toLocaleLowerCase(),
            "poderCalorifico": alimentoNuevo.poderCalorifico,
            "kcal": alimentoNuevo.kcal,
            "agua": alimentoNuevo.agua,
            "carboHidratos": alimentoNuevo.carboHidratos,
            "colesterol": alimentoNuevo.colesterol,
            "fibra": alimentoNuevo.fibra,
            "proteina": {
                "animal": alimentoNuevo.proteina.animal,
                "vegetal": alimentoNuevo.proteina.vegetal
            },
            "lipidos": {
                "grasa": alimentoNuevo.lipidos.grasa,
                "saturada": alimentoNuevo.lipidos.saturada,
                "monoinsaturada": alimentoNuevo.lipidos.monoinsaturada,
                "poliinsaturada": alimentoNuevo.lipidos.poliinsaturada
            },
            "minerales": {
                "calcio": alimentoNuevo.minerales.calcio,
                "potasio": alimentoNuevo.minerales.potasio,
                "fosforo": alimentoNuevo.minerales.fosforo,
                "cobre": alimentoNuevo.minerales.cobre,
                "yodo": alimentoNuevo.minerales.yodo,
                "selenio": alimentoNuevo.minerales.selenio,
                "cloro": alimentoNuevo.minerales.cloro,
                "hierro": alimentoNuevo.minerales.hierro,
                "sodio": alimentoNuevo.minerales.sodio,
                "zinq": alimentoNuevo.minerales.zinq,
                "magnesio": alimentoNuevo.minerales.magnesio,
                "manganeso": alimentoNuevo.minerales.manganeso
            },
            "vitaminas": {
                "b1": alimentoNuevo.vitaminas.b1,
                "b2": alimentoNuevo.vitaminas.b2,
                "b3": alimentoNuevo.vitaminas.b3,
                "b5": alimentoNuevo.vitaminas.b5,
                "b6": alimentoNuevo.vitaminas.b6,
                "b8": alimentoNuevo.vitaminas.b8,
                "b9": alimentoNuevo.vitaminas.b9,
                "b12": alimentoNuevo.vitaminas.b12,
                "c": alimentoNuevo.vitaminas.c,
                "d": alimentoNuevo.vitaminas.d,
                "a": alimentoNuevo.vitaminas.a,
                "e": alimentoNuevo.vitaminas.e
            }
        },
    );
    fs.writeFileSync("datosAlimentos.json", JSON.stringify(alimentos))
    return true;
}

function obtenerUltimoID() {
    const alimentos = require('../datosAlimentos.json');
    return alimentos[alimentos.length - 1].id + 1;
}

module.exports = { guardarAlimentoNuevo };