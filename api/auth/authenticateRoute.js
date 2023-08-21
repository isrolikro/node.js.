import express from "express";
import controllersUsers from "../users/controllersUsers.js";

const route = express.Router();

route.post("/login", controllersUsers.login);
route.post("/register", controllersUsers.createUser);

export default route;
