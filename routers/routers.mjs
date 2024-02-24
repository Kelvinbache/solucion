import express from "express";

//middlewares for each router 
import { admin, post, remover } from "../controller/controller.mjs";

const router = express.Router();

//router principal
router.get("/", admin);

// router for create user
router.post("/", post);

// router for remover users
router.delete("/:id", remover);

export { router };
