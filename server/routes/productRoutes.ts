import { Router } from "express";
import { getProductById, getProducts } from "../controllers/productController";

const router = Router();

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

export { router as productRoutes };
