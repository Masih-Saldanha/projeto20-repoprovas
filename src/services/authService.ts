import bcrypt from "bcrypt";

import { getUserByEmail, insertUser, UserData } from "../repositories/authRepository.js";
import { throwError } from "../utils/errorTypeUtils.js";

async function registerUser(userData: UserData) {
    const userExist = await findUser(userData.email);
    throwError(!!userExist, "Conflict", `The email: "${userData.email}" is already registered, try another one`);

    userData.password = bcrypt.hashSync(userData.password, +process.env.BCRYPT_SALT);

    await insertUser(userData);
};

async function findUser(email: string) {
    return await getUserByEmail(email);
}

const authService = {
    registerUser,
};

export default authService;