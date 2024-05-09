import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();

  // Seed user role upsert
  await prisma.role.upsert({
    where: { name: "user" },
    update: {
      name: "user",
    },
    create: {
      name: "user",
    },
  });

  // Seed admin role
  await prisma.role.upsert({
    where: { name: "admin" },
    update: {
      name: "admin",
    },
    create: {
      name: "admin",
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    // eslint-disable-next-line no-undef
    process.exit(1);
  })
  .then(() => {
    console.log("✅ Seed completed");
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
