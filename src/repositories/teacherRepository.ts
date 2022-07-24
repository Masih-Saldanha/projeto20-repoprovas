import { Teacher } from "@prisma/client";

import { prisma } from "../config/database.js";

export type TeacherData = Omit<Teacher, "id">;

export async function getTeacherByName(name: string) {
    return await prisma.teacher.findUnique({
        where: {
            name
        }
    });
};
