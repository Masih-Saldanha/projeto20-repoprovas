import supertest from "supertest";

import app from "../src/config/app.js";
import { prisma } from "../src/config/database.js";
import authFactory from "./factories/authFactory.js";

beforeEach(async () => {
    await prisma.$executeRaw`
        TRUNCATE TABLE users
    `;
});

describe("Auth Tests", () => {
    it("Given an email and password, create an account on DB", async () => {
        const user = authFactory.createUser();
        const response = await supertest(app).post("/sign-up").send(user);

        const findUser = await prisma.user.findUnique({ where: { email: user.email } });

        expect(user.email).toBe(findUser.email);
        expect(user.password).not.toBe(findUser.password);
        expect(response.statusCode).toBe(201);       
    });

    it("Given an email and password, login and get a token", async () => {
        const user = authFactory.createUser();
        await supertest(app).post("/sign-up").send(user);

        const response = await supertest(app).post("/sign-in").send(user);

        expect(response.body.token).toBeTruthy();
        expect(response.statusCode).toBe(201);        
    });
});

afterAll(async () => {
    await prisma.$disconnect();
});