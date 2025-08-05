import express, { Request, Response, NextFunction } from "express";
import userRouter from "./routes/user";
import loginRouter from "./routes/login";
import rateLimit from "express-rate-limit";
import { AuthenticatedRequest, verifyTokenRoute } from "./utils/protectedRoute";
import productRouter from "./routes/product";
import customerRouter from "./routes/customer";
import orderRouter from "./routes/order";


require("dotenv").config();
const cors = require("cors"); 
const app = express();
 
app.use(cors());
 
const PORT = process.env.PORT || 3000;

// Configure general rate limiter
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  handler: (req, res) => {
    res.status(429).json({ error: "Too many requests, please try again later." });
  },
});
 
// Apply general rate limiter to all requests
app.use(generalLimiter);
 
// Configure stricter rate limiter for sensitive operations
const strictLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // Limit each IP to 50 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({ error: "Too many requests, please try again later." });
  },
});
 
app.use("/api/v1/users", strictLimiter);
app.use("/api/v1/auth", strictLimiter);

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


app.use("/api/v1", userRouter);
app.use("/api/v1", loginRouter);
app.use("/api/v1", productRouter);
app.use("/api/v1", customerRouter);
app.use("/api/v1", orderRouter);