import { faker } from "@faker-js/faker";

function createUser() {
    return {
        email: faker.internet.email(),
        password: faker.internet.password()
    };
};

const authFactory = {
    createUser
};

export default authFactory;