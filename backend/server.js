import express from "express";
import cors from "cors";
import { connectDataBase } from "./config/database.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//App config
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

//db connection

connectDataBase();

//api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API is Working");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});

//mongodb+srv://dhruvpathak74:9720207705@cluster0.kx2tlti.mongodb.net/?

//mongodb+srv://dhruvpathak74:9720207705@cluster0.kx2tlti.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
