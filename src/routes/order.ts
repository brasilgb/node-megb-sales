import express from "express";
import { createOrder, deleteOrderBiId, getOrderBiId, getOrders, updateOrderBiId } from "@/controllers/orders";
import { verifyTokenRoute } from "@/utils/protectedRoute";

const app = express();

const orderRouter = express.Router();

orderRouter.post("/orders", createOrder);
orderRouter.get("/orders", getOrders);
orderRouter.get("/orders/:id", getOrderBiId);
orderRouter.put("/orders/:id", updateOrderBiId);
orderRouter.delete("/orders/:id", deleteOrderBiId);

export default orderRouter;