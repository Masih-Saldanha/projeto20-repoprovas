import { Router } from "express";

import authRouter from "./authRouter.js";
import categoryRouter from "./categoryRouter.js";
import testRouter from "./testRouter.js";

const router = Router();

router.use(authRouter);
router.use(categoryRouter);
router.use(testRouter);

export default router;