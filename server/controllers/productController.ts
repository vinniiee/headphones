import { NextFunction, Request, Response } from "express";
import Product from "../models/productModel";

export const getProducts = async (req: Request, res: Response) => {
  const products = await Product.find();
  res.json(products);
};

export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let product;
  try {
    product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    next(err);
  }
};
