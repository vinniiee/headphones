import { Request, Response, Router } from "express";
import multer from "multer";
import asyncHandler from "../middlewares/asyncHandler";
import { uploadImageToS3 } from "../aws-config";
import { requireAdminAccess, requireAuth } from "../middlewares/authMiddleware";
import Product from "../models/productModel";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = Router();

router.post(
  "/:productId",
  requireAuth,
  requireAdminAccess,
  upload.single("image"),
  asyncHandler(async (req: Request, res: Response) => {
    const productId = req.params.productId;
    console.log(req.file);
    if (!req.file) {
      res.status(400);
      throw new Error("No file is provided for the upload.");
    }
    const imageName = await uploadImageToS3(req.file);
    const product = await Product.findById(productId);
    if (!product) {
      res.status(400);
      throw new Error("Product not found.");
    } else {
      product.image = imageName;
      await product.save();
    }
    res.json({
      message: "Uploaded Image file",
      imageName: imageName,
    });
  })
);

export { router as imageUploadRoute };
