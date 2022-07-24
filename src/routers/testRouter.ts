import { Router } from "express";

import { validateToken } from "../middlewares/tokenMiddleware.js";
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import { testSchema } from "../schemas/testSchema.js";
import { addTest, getTests } from "../controllers/testController.js";

const testRouter = Router();

testRouter.post("/tests/add", validateToken, validateSchema(testSchema), addTest);
testRouter.get("/tests", validateToken, getTests);

export default testRouter;