import { Request, Response } from "express";

import { ConfirmSignUp } from "../schemas/authSchema.js";
import authService from "../services/authService.js";
import { throwError } from "../utils/errorTypeUtils.js";

export async function createUser(req: Request, res: Response) {
    const userData: ConfirmSignUp = req.body;
    throwError(!userData.confirmPassword, "Not Acceptable", `"confirmPassword" is required`);
    delete userData.confirmPassword;

    await authService.registerUser(userData);

    res.sendStatus(201);
};