import express from "express";

//middlewares for each router 
import { about, admin, post, remover, validation_admin, validation_users } from "../controller/controller.mjs";

const router = express.Router();

//router about principal
router.get("/", admin);

//router about validation of admin
router.post("/validation",validation_admin);

// router for create user
router.post("/create-users", post);


// router for user 
router.get("/about",about); // we will have that, do other address url for form and page 

router.post("/validation-users",validation_users);

// router for remover users
router.delete("/delete-users/:id", remover);

export { router };
