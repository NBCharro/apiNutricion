import express from 'express';
import path from 'path';
import alimentosRouter from './routes/alimentos'
import renderpug from './routes/renderpug'

const app = express()
app.use(express.json())
const cors = require('cors');
app.use(cors());
const PORT = process.env.PORT || 3000

// Configuración de Pug para mostrar la home
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/', renderpug);

// Funcionalidad de la API
app.use('/api/v1/', alimentosRouter)

app.listen(PORT, () => {
	console.log(`Server is running in port ${PORT}`);
})