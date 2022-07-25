import { prisma } from "../src/config/database.js";

export const categories = ["Projeto", "Prática", "Recuperação"];
export const teachers = ["Diego Pinho", "Bruna Hamori"];
export const disciplines = [
    { name: "HTML e CSS", termId: 1 },
    { name: "JavaScript", termId: 2 },
    { name: "React", termId: 3 },
    { name: "Humildade", termId: 1 },
    { name: "Planejamento", termId: 2 },
    { name: "Autoconfiança", termId: 3 }
];
export const teachersDisciplines = [
    {teacherId: 1, disciplineId: 1},
    {teacherId: 1, disciplineId: 2},
    {teacherId: 1, disciplineId: 3},
    {teacherId: 2, disciplineId: 4},
    {teacherId: 2, disciplineId: 5},
    {teacherId: 2, disciplineId: 6},
];

async function main() {
    for (let i = 1; i < 7; i++) {
        await prisma.term.createMany({
            data: {
                number: i
            },
            skipDuplicates: true
        });
    };

    for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        await prisma.category.createMany({
            data: {
                name: category
            },
            skipDuplicates: true
        });
    };

    for (let i = 0; i < teachers.length; i++) {
        const teacher = teachers[i];
        await prisma.teacher.createMany({
            data: {
                name: teacher
            },
            skipDuplicates: true
        });
    };

    for (let i = 0; i < disciplines.length; i++) {
        const discipline = disciplines[i];
        await prisma.discipline.createMany({
            data: {
                name: discipline.name,
                termId: discipline.termId
            },
            skipDuplicates: true
        });
    };

    for (let i = 0; i < teachersDisciplines.length; i++) {
        const teacherDiscipline = teachersDisciplines[i];
        await prisma.teacherDiscipline.createMany({
            data: {
                teacherId: teacherDiscipline.teacherId,
                disciplineId: teacherDiscipline.disciplineId
            },
            skipDuplicates: true
        });
    };
}

main().catch(e => {
    console.log(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
})