import { getCategoryByName } from "../repositories/categoryRepository.js";
import { getDisciplineByName } from "../repositories/disciplineRepository.js";
import { getTeacherDisciplineByIds } from "../repositories/teacherDisciplineRepository.js";
import { getTeacherByName } from "../repositories/teacherRepository.js";
import { insertTest } from "../repositories/testRepository.js";
import { DecompoundedTestDataWithoutIds } from "../schemas/testSchema.js";
import { throwError } from "../utils/errorTypeUtils.js";

async function addTest(testData: DecompoundedTestDataWithoutIds) {
    const findCategory = await getCategoryByName(testData.category);
    throwError(!findCategory, "Not Found", `The category "${testData.category}" isn't registered yet, try a valid one`);

    const findDiscipline = await getDisciplineByName(testData.discipline);
    throwError(!findDiscipline, "Not Found", `The discipline "${testData.discipline}" isn't registered yet, try a valid one`);

    const findTeacher = await getTeacherByName(testData.teacher);
    throwError(!findTeacher, "Not Found", `The teacher "${testData.teacher}" isn't registered yet, try a valid one`);

    const findTeacherDiscipline = await getTeacherDisciplineByIds(findTeacher.id, findDiscipline.id);
    throwError(!findTeacherDiscipline, "Not Found", `The teacher "${findTeacher.name}" and "${findDiscipline.name}" relation doesn't exist, try a valid one`);

    const testDataToInsert = {
        name: testData.name,
        pdfUrl: testData.pdfUrl,
        categoryId: findCategory.id,
        teacherDisciplineId: findTeacherDiscipline.id
    };

    await insertTest(testDataToInsert);
};

async function getTests(groupBy) {
    if (groupBy === "disciplines") {
        return [];
    };
    if (groupBy === "teachers") {
        return [];
    };
    throwError(true, "Not Acceptable", `Invalid link`);
};

const testService = {
    addTest,
    getTests
};

export default testService;
