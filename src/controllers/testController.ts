import { Request, Response } from "express";

import testService from "../services/testService.js";
import { DecompoundedTestDataWithoutIds } from "../schemas/testSchema.js";

export async function addTest(req: Request, res: Response) {
    const testData: DecompoundedTestDataWithoutIds = req.body;

    await testService.addTest(testData);

    res.sendStatus(201);
};
