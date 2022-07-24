import { Router } from "express";

import { validateToken } from "../middlewares/tokenMiddleware.js";
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import { testSchema } from "../schemas/testSchema.js";
import { addTest } from "../controllers/testController.js";

const testRouter = Router();

testRouter.post("/add-test", validateToken, validateSchema(testSchema), addTest);

export default testRouter;