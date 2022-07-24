import { Discipline } from "@prisma/client";

import { prisma } from "../config/database.js";

export type DisciplineData = Omit<Discipline, "id">;

export async function getDisciplineByName(name: string) {
    return await prisma.discipline.findUnique({
        where: {
            name
        }
    });
};
