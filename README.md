# Frontend

- The only routes that will work are:
  /, devices/, devices/create and devices/[id]
- This application would grow and need to scale so I've used next.js on the frontend with Material UI for it's comprehensive component library.
- For performance enhancements I have use tanstack query for client side.
- React hook forms has been used as an application like this will have many CRUD operations and complex form logic. This package suits many of those needs.
- Zod has been used to provide schema validation.
- echarts is a very flexible charting library. Given the type of data the application may use, this would be a suitable library to use.

# Other considerations

- Enhancing the look and feel.
- Improving user feedback with things like toast's for messaging and more detailed error messaging.
- Making the application responsive.
- As the number of routes and complexity increases a separate routes file would be needed.
- The application would need an authentication system adding, along with an RBAC system.
- If the application was to be used internationally, then string formatting, timezones etc. would need to be considered.
- A theme switcher would be nice
- Add unit and e2e tests
- Add real-time updates via Supabases websocket solution.

# Backend

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
