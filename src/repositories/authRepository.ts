import { User } from "@prisma/client";

import { prisma } from "../config/database.js";

export type UserData = Omit<User, "id">;

export async function getUserByEmail(email: string) {
    return await prisma.user.findUnique({
        where: {
            email
        }
    });
};

export async function insertUser(userData: UserData) {
    await prisma.user.create({
        data: userData
    });
};