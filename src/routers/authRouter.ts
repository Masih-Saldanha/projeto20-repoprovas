import { Router } from "express";

import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import { signInSchema, signUpSchema } from "../schemas/authSchema.js";
import { signIn, signUp } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/sign-up", validateSchema(signUpSchema), signUp);
authRouter.post("/sign-in", validateSchema(signInSchema), signIn);

export default authRouter;