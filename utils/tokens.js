import jwt from "jsonwebtoken";

export const createActivationToken = (payload) => {
  return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};
export const createResetToken = (payload) => {
  return jwt.sign(payload, process.env.RESET_TOKEN_SECRET, {
    expiresIn: "6h",
  });
};
