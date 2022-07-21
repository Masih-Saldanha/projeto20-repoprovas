import { Request, Response } from "express";

import { ConfirmSignUp } from "../schemas/authSchema.js";
import authService from "../services/authService.js";

export async function createUser(req: Request, res: Response) {
    const userData: ConfirmSignUp = req.body;
    delete userData.confirmPassword;

    await authService.registerUser(userData);

    res.sendStatus(201);
};