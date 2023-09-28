import { faker } from "@faker-js/faker";

export function createUser(): User {
  return {
    id: faker.database.mongodbObjectId(),
    name: faker.company.name(),
    username: faker.person.fullName(),
    email:faker.internet.email()
  };
}

export const UserList: any[] = faker.helpers.multiple(createUser, {  count: 2});