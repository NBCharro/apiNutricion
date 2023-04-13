"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // ESModules que se usa ahora. Pero transpilara a commonjs
//const express = require(('express)) => commonjs que se usaba antes
const diaryServices = __importStar(require("../services/diaryServices"));
const utils_1 = __importDefault(require("../utils"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});
router.get('/:id', (req, res) => {
    // Los params siempre son string, asi que hay que transformarlo a number con el +
    const diary = diaryServices.findById(+req.params.id);
    // Como hemos establecido que la funcion findById anterior puede devolver un undefined, TS autoamticamente le pone el ? (diary.)
    // porque igual no devuelve un objeto y no se puede acceder al comment
    const comentario = diary === null || diary === void 0 ? void 0 : diary.comment;
    return diary ?
        res.send(comentario) : res.sendStatus(404);
});
router.post('/', (req, res) => {
    // De esta forma podrian pasarnos un "weather":"cualquier cosa" y aunque hayamos dicho que tiene que ser un enum, TS no funciona en runtime
    // solo funciona a la hora de programar, para ayudarnos como un lint. Las validaciones tenemos que hacerlas a mano
    // const { date, weather, visibility, comment } = req.body
    // const newDiaryEntry = diaryServices.addDiary({ date, weather, visibility, comment })
    // res.json(newDiaryEntry)
    try {
        const newDiaryEntry = (0, utils_1.default)(req.body);
        const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry);
        res.json(addedDiaryEntry);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});
exports.default = router;
