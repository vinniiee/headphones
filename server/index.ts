import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import products from "./data/products";
import { dbConnect } from "./config/db";
import { errorHandler, notFound } from "./middlewares/errorMiddleware";
import { productRoutes } from "./routes/productRoutes";

const app = express();

app.use("/api/products", productRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running...");
});

app.use(notFound);
app.use(errorHandler);

const start = async () => {
  try {
    await dbConnect();
    app.listen(5000, () => {
      console.log("Listening on port 5000...");
    });
  } catch (e) {
    console.log(e);
  }
};

start();
