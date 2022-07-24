import Joi from "joi";

import { UserData } from "../repositories/authRepository.js";

export const signUpSchema = Joi.object<UserData>({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

export const signInSchema = Joi.object<UserData>({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});