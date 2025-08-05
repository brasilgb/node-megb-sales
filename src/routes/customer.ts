import express from "express";
import { createCustomer, deleteCustomerBiId, getCustomerBiId, getCustomers, updateCustomerBiId } from "@/controllers/customers";
import { verifyTokenRoute } from "@/utils/protectedRoute";

const app = express();

const customerRouter = express.Router();

customerRouter.post("/customers", createCustomer);
customerRouter.get("/customers", getCustomers);
customerRouter.get("/customers/:id", getCustomerBiId);
customerRouter.put("/customers/:id", updateCustomerBiId);
customerRouter.delete("/customers/:id", deleteCustomerBiId);

export default customerRouter;