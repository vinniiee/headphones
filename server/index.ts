import express, { Request, Response } from "express";
import products from "./products";

const app = express();

app.get("/api/products", (req: Request, res: Response) => {
  res.json(products);
});

app.get("/api/products/:id", (req: Request, res: Response) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running...");
});

app.listen(5000, () => {
  console.log("Listening on port 5000...");
});
