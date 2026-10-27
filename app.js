import express from "express"
import cookieParser from "cookie-parser";
import path from "path"
import db from "./config/mongoose-connection.js";
import { fileURLToPath } from "url";
import ownersRouter from "./routes/ownersRouter.js";
import usersRouter from "./routes/usersRouter.js";
import productRouter from "./routes/productRouter.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");

app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productRouter);

app.listen(3000);

