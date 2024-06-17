import { Router } from "express";
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from "../controllers/productController";
import { requireAdminAccess, requireAuth } from "../middlewares/authMiddleware";

const router = Router();

router.route("/").get(getProducts).post(requireAuth,requireAdminAccess,createProduct);
router.route("/:id").get(getProductById);
router
  .route('/:id')
  .get(getProductById)
  .put(requireAuth, requireAdminAccess, updateProduct)
  .delete(requireAuth, requireAdminAccess, deleteProduct);
export { router as productRoutes };
