import express from "express";
import morgan from "morgan";
import routes from "./api/producs/routesProducs.js";
import cors from "cors"



const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", routes);

app.use(cors({origin:true}))

// app.post("./ksjhsl", (req, res)=> {
//     try {
//        const objToPost = req.body;
//        const data = // no idea for how to do it
//        const validatObj = // canal
//        const updataData = //////
//        res.status(202).json(objToPost)
//     } catch (error) {
//         res.status(404).send(error)
//     }
// })


app.listen(3000, () => console.log("Example app listening on port3000!"));
