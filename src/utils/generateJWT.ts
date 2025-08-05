import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";

const secretKey = process.env.SECRET_KEY as string;
 
const DEFAULT_SIGN_OPTIONS: SignOptions = {
  expiresIn: "1h",
};

/**
 * Synchronously signs the given payload into a JSON Web Token string.
 *
 * @param payload - The payload to sign, which can be an object literal, buffer, or string.
 * @param options - Options for the signature, inheriting from jwt.SignOptions.
 * @returns The JSON Web Token string.
 */
export function generateAccessToken(
  payload: JwtPayload,
  options: SignOptions = DEFAULT_SIGN_OPTIONS
): string {
  const token = jwt.sign(payload, secretKey, options);
  return token;
}