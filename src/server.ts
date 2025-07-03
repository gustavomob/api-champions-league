import dotenv from 'dotenv'
import express, { json } from 'express'
import { router } from './routes'
import cors from 'cors'

dotenv.config()

const app = express()
app.use(json())
app.use("/api", router)

const corsRules = {
  origin: "*",
  methods: ["GET", "POST", "PATCH", "DELETE"]
}
app.use(cors(corsRules))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
});
