import express from "express";
import { createProduct, deleteProductBiId, getProductBiId, getProducts, updateProductBiId } from "@/controllers/products";
import { verifyTokenRoute } from "@/utils/protectedRoute";

const app = express();

const productRouter = express.Router();

productRouter.post("/products", createProduct);
productRouter.get("/products", getProducts);
productRouter.get("/products/:id", getProductBiId);
productRouter.put("/products/:id", updateProductBiId);
productRouter.delete("/products/:id", deleteProductBiId);

export default productRouter;