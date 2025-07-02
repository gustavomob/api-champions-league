import { Router } from 'express';
import { getPlayer } from './controlellers/players-controller';

export const router = Router();

router.get("/players", getPlayer);


