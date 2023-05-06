import express from 'express';
import alimentosRouter from './routes/alimentos'

const app = express()
app.use(express.json())
const cors = require('cors');
app.use(cors());
const PORT = process.env.PORT || 3000


// Funcionalidad de la API
app.use('/api/v1/', alimentosRouter)

app.listen(PORT, () => {
	console.log(`Server is running in port ${PORT}`);
})

