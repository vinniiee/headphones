
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import express, { Request, Response } from "express";
import products from "./data/products";
import { dbConnect } from "./config/db";
import { errorHandler, notFound } from "./middlewares/errorMiddleware";
import { productRoutes } from "./routes/productRoutes";
import { userRoutes } from "./routes/userRoutes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running...");
});

app.use(notFound);
app.use(errorHandler);

const start = async () => {
  try {
    await dbConnect();
    if(!process.env.JWT_SECRET){
      throw new Error("JWT_SECRET must be set.");
    }
    app.listen(5000, () => {
      console.log("Listening on port 5000...");
    });
  } catch (e) {
    console.log(e);
  }
};

start();
