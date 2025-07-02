// src/routes.ts
import { Router } from 'express';
import { getPlayer } from './controlellers';

export const router = Router();

router.get("/", getPlayer);


