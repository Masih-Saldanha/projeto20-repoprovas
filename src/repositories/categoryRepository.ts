import { Category } from "@prisma/client";

import { prisma } from "../config/database.js";

export type CategoryData = Omit<Category, "id">;

export async function getCategoryByName(name: string) {
    return await prisma.category.findUnique({
        where: {
            name
        }
    });
};

export async function getAllCategories() {
    return await prisma.category.findMany();
}