import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { getUserByEmail, insertUser, UserData } from "../repositories/authRepository.js";
import { throwError } from "../utils/errorTypeUtils.js";

async function registerUser(userData: UserData) {
    const userExist = await findUser(userData.email);
    throwError(!!userExist, "Conflict", `The email: "${userData.email}" is already registered, try another one`);

    userData.password = bcrypt.hashSync(userData.password, +process.env.BCRYPT_SALT);

    await insertUser(userData);
};

async function loginUser(userData: UserData) {
    const userExist = await findUser(userData.email);
    throwError(!userExist, "Not Found", `The email: "${userData.email}" isn't registered`);

    const isPasswordRight = bcrypt.compareSync(userData.password, userExist.password);
    throwError(!isPasswordRight, "Not Acceptable", `The password sent doesn't match with the e-mail: "${userData.email}", try again`);

    const tokenData = {
        id: userExist.id,
        email: userExist.email
    };
    return jwt.sign(tokenData, process.env.JWT_TOKEN);
};

async function findUser(email: string) {
    return await getUserByEmail(email);
};

const authService = {
    registerUser,
    loginUser
};

export default authService;