import express from "express";
import {
  viewTasks,
  viewTask,
  postTask,
  updateTodo,
  deleteTask,
} from "../controllers/todo.js";

const router = express.Router();

router.get("/viewTodos", viewTasks);
router.get("/viewTodo/:id", viewTask);
router.post("/postTodo", postTask);
router.patch("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTask);

export default router;
