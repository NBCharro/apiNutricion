function eliminarAlimentoPorID(id) {
    let eliminado = false;
    try {
        const fs = require('fs');
        const alimentos = require('../datosAlimentos.json');
        const indice = alimentos.findIndex(alimento => alimento.id == id);
        console.log(indice);
        if (indice != -1) {
            alimentos.pop(indice);
            fs.writeFileSync("datosAlimentos.json", JSON.stringify(alimentos))
            eliminado = true;
        }
    } catch (error) {
    }
    return eliminado;
}


module.exports = { eliminarAlimentoPorID };