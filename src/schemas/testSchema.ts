import Joi from "joi";

import { TestData } from "../repositories/testRepository.js";

interface DecompoundedTestData extends TestData {
    category: string;
    discipline: string;
    teacher: string;
};

export type DecompoundedTestDataWithoutIds = Omit<DecompoundedTestData, "categoryId" | "teacherDisciplineId">;

export const testSchema = Joi.object<DecompoundedTestDataWithoutIds>({
    name: Joi.string().required(),
    pdfUrl: Joi.string().uri().required(),
    category: Joi.string().required(),
    discipline: Joi.string().required(),
    teacher: Joi.string().required()
});
