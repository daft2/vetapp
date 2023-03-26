// prisma/seed.ts

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: `testemail@gmail.com`,
      role: "ADMIN",
    },
  });

  await prisma.pet.createMany({
    data: [
      {
        name: "Woly",
        age: 36,
        gender: "FEMALE",
        type: "Cat",
        userId: 1,
      },
      {
        name: "Zoe",
        age: 36,
        gender: "FEMALE",
        type: "Cat",
        userId: 1,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
