import { Router } from 'express'
import { 
  getPlayerController, 
  getPlayerByIdController, 
  deletePlayerController, 
  postPlayerController,
  updatePlayerController
} from './controllers/players-controller'

export const router = Router()

router.get("/players/:id", getPlayerByIdController)
router.delete("/players/:id", deletePlayerController)
router.patch("/players/:id", updatePlayerController)
router.get("/players", getPlayerController)
router.post("/players", postPlayerController)


