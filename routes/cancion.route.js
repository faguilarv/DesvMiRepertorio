import { Router } from "express";
import {
  createCancion,
  getAllCanciones,
  removeCancion,
  updateCancion,
} from "../controllers/cancion.controller.js";

const router = Router();

router.get("/canciones", getAllCanciones);

router.post("/cancion", createCancion);

router.delete("/cancion/:id", removeCancion);

router.put("/cancion/:id", updateCancion);

export default router;
