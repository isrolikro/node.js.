import express  from "express";

import productsRoute from "./productsRoute.js"
import usersController from "../users/usersController.js"
import authenticateRoute from "../auth/authenticateRoute.js";

const router = express.Router();

router.get("/" , req, res =>{
    console.log("WELCOME TO PROJECT!");
    res.send("WELCOME TO PROJECT!");
})

router.use("/product", productsRoute)
router.use("/users", usersController)
router.use("/auth", authenticateRoute)


  
export default router;

