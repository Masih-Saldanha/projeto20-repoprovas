import { Test } from "@prisma/client";

import { prisma } from "../config/database.js";

export type TestData = Omit<Test, "id">;

export async function insertTest(data: TestData) {
    await prisma.test.create({
        data
    });
};
