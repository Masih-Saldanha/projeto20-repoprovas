import supertest from "supertest";

import app from "../src/config/app.js";
import { prisma } from "../src/config/database.js";
import authFactory from "./factories/authFactory.js";
import testFactory from "./factories/testFactory.js";

beforeEach(async () => {
    await prisma.$executeRaw`
        TRUNCATE TABLE users
    `;
    await prisma.$executeRaw`
        TRUNCATE TABLE tests
    `;
});

describe("Test Tests", () => {
    it("Given an name, pdfUrl, category, discipline and teacher='Diego Pinho', create an test on DB", async () => {
        const user = authFactory.createUser();
        await supertest(app).post("/sign-up").send(user);

        const { body } = await supertest(app).post("/sign-in").send(user);

        const testData = testFactory.createTestWithDiego();

        const { statusCode } = await supertest(app).post("/tests/add").send(testData).set("Authorization", body.token);

        const findTest = await prisma.test.findFirst({
            where: {
                name: testData.name,
                pdfUrl: testData.pdfUrl
            }
        });

        expect(statusCode).toBe(201);
        expect(findTest).toBeTruthy();
    });

    it("Given an name, pdfUrl, category, discipline and teacher='Bruna Hamori', create an test on DB", async () => {
        const user = authFactory.createUser();
        await supertest(app).post("/sign-up").send(user);

        const { body } = await supertest(app).post("/sign-in").send(user);

        const testData = testFactory.createTestWithBruna();

        const { statusCode } = await supertest(app).post("/tests/add").send(testData).set("Authorization", body.token);

        const findTest = await prisma.test.findFirst({
            where: {
                name: testData.name,
                pdfUrl: testData.pdfUrl
            }
        });

        expect(statusCode).toBe(201);
        expect(findTest).toBeTruthy();
    });

    it("Given an query 'groupBy': 'disciplines', get an array of tests", async () => {
        const user = authFactory.createUser();
        await supertest(app).post("/sign-up").send(user);

        const { body } = await supertest(app).post("/sign-in").send(user);

        const response = await supertest(app).get("/tests?groupBy=disciplines").set("Authorization", body.token);

        expect(response.statusCode).toBe(200);
        expect(response.body.tests).toBeTruthy();
    });

    it("Given an query 'groupBy': 'teachers', get an array of tests", async () => {
        const user = authFactory.createUser();
        await supertest(app).post("/sign-up").send(user);

        const { body } = await supertest(app).post("/sign-in").send(user);

        const response = await supertest(app).get("/tests?groupBy=teachers").set("Authorization", body.token);

        expect(response.statusCode).toBe(200);
        expect(response.body.tests).toBeTruthy();
    });
});

afterAll(async () => {
    await prisma.$disconnect();
});