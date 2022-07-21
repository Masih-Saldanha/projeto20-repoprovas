import { Request, Response } from "express";

import { ConfirmSignUp } from "../schemas/authSchema.js";
import authService from "../services/authService.js";
import { throwError } from "../utils/errorTypeUtils.js";
import { UserData } from "../repositories/authRepository.js";

export async function signUp(req: Request, res: Response) {
    const userData: ConfirmSignUp = req.body;
    throwError(!userData.confirmPassword, "Not Acceptable", `"confirmPassword" is required`);
    delete userData.confirmPassword;

    await authService.registerUser(userData);

    res.sendStatus(201);
};

export async function signIn(req: Request, res: Response) {
    const userData: UserData = req.body;

    const token = await authService.loginUser(userData);

    res.status(201).send(token);
}