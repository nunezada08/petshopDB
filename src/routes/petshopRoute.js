import { Router } from 'express';
import * as petshopController from './../controllers/petshopController.js';

const router = Router();

router.get("/", petshopController.listarTodosPets)
router.get("/:id", petshopController.buscarPetPorId)

export default router;