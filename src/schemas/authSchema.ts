import Joi from "joi";

import { UserData } from "../repositories/authRepository.js";

export interface ConfirmSignUp extends UserData {
    confirmPassword: string;
};

export const signUpSchema = Joi.object<ConfirmSignUp>({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.ref("password")
});

export const signInSchema = Joi.object<UserData>({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});