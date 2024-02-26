import express from "express";

//middlewares for each router 
import { admin, post, remover, validation_admin } from "../controller/controller.mjs";

const router = express.Router();

//router principal
router.get("/", admin);

//router about validation of admin
router.post("/validation",validation_admin);

// router for create user
router.post("/create-users", post);

// router for remover users
router.delete("/delete-users/:id", remover);

export { router };
