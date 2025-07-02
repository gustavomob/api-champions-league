import { Router } from 'express';
import { getPlayer } from './controllers/players-controller';

export const router = Router();

router.get("/players", getPlayer);


