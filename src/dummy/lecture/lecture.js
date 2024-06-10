import { faker } from "@faker-js/faker/locale/ko";

export const lecture = {
  id: faker.number.int(),
  courseId: faker.number.int(),
  lectureTitle: faker.string.sample(),
};

// export const lecture = Array.from({ length: 10 }, () => ({
//   id: faker.number.int(),
//   courseId: faker.number.int(),
//   lectureTitle: faker.string.sample,
// }));
