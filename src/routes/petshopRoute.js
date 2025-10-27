import { Router } from 'express';
import * as petshopController from './../controllers/petshopController.js';

const router = Router();

router.get("/", petshopController.listarTodosPets)
router.get("/:id", petshopController.buscarPetPorId)
router.post("/", petshopController.criarPet);
router.delete("/:id", petshopController.apagar);
router.put("/:id", petshopController.atualizar);

export default router;