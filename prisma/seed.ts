import { db } from '../src/lib/db';

async function main() {
  await db.user.create({
    data: {
      email: 'demo@example.com',
      emailAccounts: {
        create: {
          provider: 'gmail',
          email: 'demo@example.com',
        },
      },
    },
  });

  await db.company.create({
    data: {
      name: 'Acme Inc',
      contacts: {
        create: {
          name: 'John Doe',
          email: 'john@acme.com',
        },
      },
    },
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
