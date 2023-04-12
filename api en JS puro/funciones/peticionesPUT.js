function modificarAlimento(alimentoModificado) {
    let modificado = false;
    try {
        const fs = require('fs');
        const alimentos = alimentosSinAlimentoModificado(alimentoModificado.id);
        alimentos.push(
            {
                "id": alimentoModificado.id,
                "alimento": alimentoModificado.alimento.toLocaleLowerCase(),
                "poderCalorifico": alimentoModificado.poderCalorifico,
                "kcal": alimentoModificado.kcal,
                "agua": alimentoModificado.agua,
                "carboHidratos": alimentoModificado.carboHidratos,
                "colesterol": alimentoModificado.colesterol,
                "fibra": alimentoModificado.fibra,
                "proteina": {
                    "animal": alimentoModificado.proteina.animal,
                    "vegetal": alimentoModificado.proteina.vegetal
                },
                "lipidos": {
                    "grasa": alimentoModificado.lipidos.grasa,
                    "saturada": alimentoModificado.lipidos.saturada,
                    "monoinsaturada": alimentoModificado.lipidos.monoinsaturada,
                    "poliinsaturada": alimentoModificado.lipidos.poliinsaturada
                },
                "minerales": {
                    "calcio": alimentoModificado.minerales.calcio,
                    "potasio": alimentoModificado.minerales.potasio,
                    "fosforo": alimentoModificado.minerales.fosforo,
                    "cobre": alimentoModificado.minerales.cobre,
                    "yodo": alimentoModificado.minerales.yodo,
                    "selenio": alimentoModificado.minerales.selenio,
                    "cloro": alimentoModificado.minerales.cloro,
                    "hierro": alimentoModificado.minerales.hierro,
                    "sodio": alimentoModificado.minerales.sodio,
                    "zinq": alimentoModificado.minerales.zinq,
                    "magnesio": alimentoModificado.minerales.magnesio,
                    "manganeso": alimentoModificado.minerales.manganeso
                },
                "vitaminas": {
                    "b1": alimentoModificado.vitaminas.b1,
                    "b2": alimentoModificado.vitaminas.b2,
                    "b3": alimentoModificado.vitaminas.b3,
                    "b5": alimentoModificado.vitaminas.b5,
                    "b6": alimentoModificado.vitaminas.b6,
                    "b8": alimentoModificado.vitaminas.b8,
                    "b9": alimentoModificado.vitaminas.b9,
                    "b12": alimentoModificado.vitaminas.b12,
                    "c": alimentoModificado.vitaminas.c,
                    "d": alimentoModificado.vitaminas.d,
                    "a": alimentoModificado.vitaminas.a,
                    "e": alimentoModificado.vitaminas.e
                }
            },
        );
        fs.writeFileSync("datosAlimentos.json", JSON.stringify(alimentos))
        modificado = true;
    } catch (error) {
        console.log(error);
    }
    return modificado;
}

function alimentosSinAlimentoModificado(id) {
    const alimentosModificado = require('../datosAlimentos.json');
    const indice = alimentosModificado.findIndex(alimento => alimento.id == id);
    if (indice != -1) {
        alimentosModificado.pop(indice);
    }
    return alimentosModificado;
}

module.exports = { modificarAlimento };