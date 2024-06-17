import { NextFunction, Request, Response } from "express";
import Product from "../models/productModel";
import asyncHandler from "../middlewares/asyncHandler";

 const getProducts = async (req: Request, res: Response) => {
  const products = await Product.find();
  res.json(products);
};

 const getProductById = async (
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

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
 const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample name",
    price: 0,
    user: req.user?._id,
    image: "/images/sample.jpg",
    brand: "Sample brand",
    category: "Sample category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample description",
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
 const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
 const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await Product.deleteOne({ _id: product._id });
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});


export {
  deleteProduct,
  updateProduct,
  getProductById,
  getProducts,
  createProduct
}