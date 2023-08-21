import express from "express";
import usersController from "./controllersUsers.js";
const route = express.Router();

route.get("/", usersController.getAllUsers);
route.get("/:id", usersController.getUsers);
route.delete("/:id", usersController.deleteUsers);
route.put("/:id", usersController.updateUsers);

export default route;
