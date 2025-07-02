import express, {json, Request, Response} from 'express'
import { getPlayer } from './controlellers'


export function createApp() {
const app = express()
app.use(json())

app.get("/", getPlayer )
return app
}