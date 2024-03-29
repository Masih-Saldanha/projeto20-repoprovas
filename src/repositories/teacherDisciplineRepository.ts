import { TeacherDiscipline } from "@prisma/client";

import { prisma } from "../config/database.js";

export type TeacherDisciplineData = Omit<TeacherDiscipline, "id">;

export async function getTeacherDisciplineByIds(teacherId: number, disciplineId: number) {
    return await prisma.teacherDiscipline.findFirst({
        where: {
            teacherId,
            disciplineId
        }
    });
};

export async function getAllTestsByTeacherDisciplines() {
    return await prisma.teacherDiscipline.findMany({
        include: {
            discipline: {
                include: {
                    term: {}
                }
            },
            teacher: {},
            tests: {
                include: {
                    category: {}
                }
            }
        }
    });
};
