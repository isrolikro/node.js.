import express  from "express";

import productsRoute from "./productsRoute.js"
import loginRoute from "./loginRoute.js"

const router = express.Router();

router.get("/" , req, res =>{
    console.log("WELCOME TO PROJECT!");
    res.send("WELCOME TO PROJECT!");
})

router.use("/product", productsRoute)

router.use("/login", loginRoute)
  

export default router;

