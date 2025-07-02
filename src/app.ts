import express, {json} from 'express'
import { getPlayer } from './controllers/players-controller'

export function createApp() {
const app = express()
app.use(json())

app.get("/api", getPlayer )
return app
}