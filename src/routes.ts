import { Router } from 'express'
import { 
  getPlayerController, 
  getPlayerByIdController, 
  deletePlayerController, 
  postPlayerController 
} from './controllers/players-controller'

export const router = Router()

router.get("/players/:id", getPlayerByIdController)
router.delete("/players/:id", deletePlayerController)
router.get("/players", getPlayerController)
router.post("/players", postPlayerController)


