import { getAllCategories } from "../repositories/categoryRepository.js";

async function getCategories() {
    const categories = await getAllCategories();

    return { categories };
};

const categoryService = {
    getCategories
};

export default categoryService;