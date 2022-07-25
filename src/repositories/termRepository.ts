import { prisma } from "../config/database.js";

export async function getAllTestsByDisciplines() {
    return await prisma.term.findMany({
        include: {
            disciplines: {
                select: {
                    id: true,
                    name: true,
                    term: {},
                    teacherDisciplines: {
                        select: {
                            id: true,
                            discipline: {},
                            teacher: {},
                            tests: {
                                select: {
                                    id: true,
                                    name: true,
                                    pdfUrl: true,
                                    category: {}
                                }
                            }
                        }
                    }
                }
            }
        }
    });
};