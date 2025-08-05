
import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

// Secret key for signing the JWT (in a real app, store this securely)
const secretKey = process.env.SECRET_KEY as string;
 
// Define a custom type for the request that includes the user property
export interface AuthenticatedRequest extends Request {
  user?: string | JwtPayload;
}
 
// Middleware to verify JWT
export function verifyTokenRoute(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Response | void {
  const token = req.headers["authorization"];
 
  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }
 
  // Remove "Bearer " if the token is provided in "Bearer <token>" format
  const tokenWithoutBearer = token.replace("Bearer ", "");
 
  jwt.verify(tokenWithoutBearer, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Failed to authenticate token" });
    }
    // If the token is valid, save the decoded information to request for use in other routes
    req.user = decoded;
    next();
  });
}