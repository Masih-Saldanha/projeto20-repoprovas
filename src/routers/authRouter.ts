import { Router } from "express";

import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import { signInSchema, signUpSchema } from "../schemas/authSchema.js";
import { signIn, signUp } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/signup", validateSchema(signUpSchema), signUp);
authRouter.post("/signin", validateSchema(signInSchema), signIn);

export default authRouter;