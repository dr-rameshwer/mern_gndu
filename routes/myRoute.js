import { createTodo, getAllTodos } from "../controllers/myController.js";

import express from "express";

const router = express.Router();

router.post("/", createTodo);
router.get("/", getAllTodos);

export default router;
