import express from 'express'
import diaryRouter from './routes/alimentos'

const app = express()
app.use(express.json())
const cors = require('cors');
app.use(cors());
const PORT = process.env.PORT || 3000

app.use('/api/v1/', diaryRouter)

app.listen(PORT, () => {
	console.log(`Server is running in port ${PORT}`);
})