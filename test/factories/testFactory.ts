import { faker } from "@faker-js/faker";

import { categories, disciplines } from "../../prisma/seed.js";

function createTestWithDiego() {
    const randomCategoryIndex = Math.floor(Math.random() * categories.length);
    const randomDisciplineIndex = Math.floor(Math.random() * (disciplines.length / 2));
    const teacher = "Diego Pinho";

    return {
        name: faker.name.findName(),
        pdfUrl: faker.internet.url(),
        category: categories[randomCategoryIndex],
        discipline: disciplines[randomDisciplineIndex].name,
        teacher
    };
};

function createTestWithBruna() {
    const randomCategoryIndex = Math.floor(Math.random() * categories.length);
    const randomDisciplineIndex = Math.floor((Math.random() * (disciplines.length / 2)) + (disciplines.length / 2));
    const teacher = "Bruna Hamori";

    return {
        name: faker.name.findName(),
        pdfUrl: faker.internet.url(),
        category: categories[randomCategoryIndex],
        discipline: disciplines[randomDisciplineIndex].name,
        teacher
    };
};

const testFactory = {
    createTestWithDiego,
    createTestWithBruna
};

export default testFactory;