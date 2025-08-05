import express from "express";
import { createProduct, deleteProductBiId, getProductBiId, getProducts, updateProductBiId } from "@/controllers/products";
import { verifyTokenRoute } from "@/utils/protectedRoute";

const app = express();

const productRouter = express.Router();

productRouter.post("/products", verifyTokenRoute, createProduct);
productRouter.get("/products", verifyTokenRoute, getProducts);
productRouter.get("/products/:id", verifyTokenRoute, getProductBiId);
productRouter.put("/products/:id", verifyTokenRoute, updateProductBiId);
productRouter.delete("/products/:id", verifyTokenRoute, deleteProductBiId);

export default productRouter;