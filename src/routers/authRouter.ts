import { Router } from "express";

import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import { signInSchema, signUpSchema } from "../schemas/authSchema.js";
import { createUser } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/signup", validateSchema(signUpSchema), createUser);
authRouter.post("/signin", validateSchema(signInSchema), );

export default authRouter;