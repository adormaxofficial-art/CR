# CR

Minimal CRM scaffold built with Next.js 14, Prisma, NextAuth and Tailwind CSS.

## Getting Started

codex/create-new-branch-and-scaffold-minimal-crm-7x0ab8
1. Start PostgreSQL (using Docker):
   ```bash
   docker run --name crm-postgres -e POSTGRES_DB=crm \
     -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres \
     -p 5432:5432 -d postgres:15
   ```
2. Install dependencies (run locally or on your hosting environment):
   ```bash
   npm install
   ```
3. Copy the example environment file and configure variables:
   ```bash
   cp .env.example .env
   ```
   For Google authentication set either `GOOGLE_CLIENT_ID`/`GOOGLE_CLIENT_SECRET` or
   `GMAIL_CLIENT_ID`/`GMAIL_CLIENT_SECRET`.
4. Generate the Prisma client:
   ```bash
   npx prisma generate
   ```
5. Run database migrations (first run will create the initial migration):
   ```bash
   npx prisma migrate dev -n init
   ```
6. Seed the database (optional):
   ```bash
   npx prisma db seed || echo "no seed"
   ```
7. Run the development server:
   ```bash
   npm run dev
   ```
8. Start the email scheduler in a separate process:
   ```bash
   npm run email:scheduler
   ```

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy the example environment file and configure variables:
   ```bash
   cp .env.example .env
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

Prisma models are defined in `prisma/schema.prisma`. Seed data can be added with:
```bash
npm run seed
```
main
