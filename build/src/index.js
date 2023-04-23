"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const alimentos_1 = __importDefault(require("./routes/alimentos"));
const renderpug_1 = __importDefault(require("./routes/renderpug"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const cors = require('cors');
app.use(cors());
const PORT = process.env.PORT || 3000;
// Configuración de Pug para mostrar la home
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/', renderpug_1.default);
// Funcionalidad de la API
app.use('/api/v1/', alimentos_1.default);
app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`);
});
