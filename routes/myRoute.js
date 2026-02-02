import { createTodo } from "../controllers/myController.js";
import express from "express";

const router = express.Router();

router.post("/", createTodo);

export default router;
