## Dependencies

The application runs on a node.js server - https://nodejs.org/en/download
Install NPM - https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

# Install project dependencies

From the backend/ folder, run npm install

Once the dependencies have successfully installed, run the following commands.

# Setting up supabase

1. Create a free account on supabase - https://supabase.com/
2. Create new project
3. Project name - HomeLink, Region - West Europe - London
4. Take a note of your database password
5. Click Connect in the top nav bar. Select ORM and ensure 'Prisma' is the tool selected'
6. Copy the DATABASE_URL and DIRECT_URL and create a new file name .env at the root of backend.
7. Replace [YOUR-PASSWORD] with the database password used in step 4

If your database fails to connect, it may be related to supabases pooled connections.
Try this solution
https://github.com/prisma/prisma/discussions/24412

# Create DB tables

npx prisma db push

# Seed DB with dummy data

npx prisma db seed

# Running the server locally

npm run server

The application start on http://localhost:4000/

I chose Supabase, Prisma, and Express for the backend because they each solve a different layer of the stack in a modern, efficient way:

Supabase provides a fully managed Postgres database with authentication, APIs, and hosting built-in. It saves time setting up infrastructure while giving me the power of SQL and features like row-level security.

Prisma acts as the ORM layer between my database and code. It gives me type-safe queries, schema migrations, and easy relations (like devices ↔ history). This makes database access both safer and easier to maintain.

Express is a lightweight web framework for building REST APIs. It lets me expose the Prisma queries (and Supabase features) as clean API endpoints for my frontend or external clients.

Together, this stack gives me:

A scalable, production-ready database (Supabase)
A safe, developer-friendly ORM (Prisma)
A flexible API layer (Express)

That combination means I can move fast without sacrificing stability or maintainability.

- A lot more thought and testing would need to go into security. This would include:
  encryption, protecting routes, granular RBAC controls
- A strategy would need to be in place to handle updating database schemas and deploying updates through CI/CD
- Add unit tests
- Supabase supports realtime. This needs enabling in the platform and handled on the FE.

# Other considerations

- Extend api's to handle rate limits, cursors for pagination and direct filtering on data e.g. by device type
- Update the API's to only return devices based on the user logged in.

The database is currently in its simplest form.

The next steps for this database would be.

Create the following tables

- Users - This would be for application company users and customers. Devices could be assigned to customers and managed by company users. Any changes to the devices could be linked to a particular user.
- Types - As the system evolves there will be many different types of devices which may need. Holding these in a separate table will keep newly added devices aligned
- Configurations - There may be several different configurations for a given device type. Storing these in a separate table would allow many devices to be updated via once configuration change.

The device schema would need updating to handle relationships for types, configurations, history and ownership.

Indexes would also need adding to ensure lookups are faster.

# Challenges

- Dealing with supabase going down :( - https://status.supabase.com/incidents/z7jrr0ngpnzb
