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
4. Take a note of your password
5. Click Connect in the top nav bar. Select ORM and ensure 'Prisma' is the tool selected'
6. Copy the DATABASE_URL and DIRECT_URL and create a new file name .env at the root of backend.
7. Replace [YOUR-PASSWORD] with the password used in step 4

# Create DB tables

npx prisma db push

# Seed DB with dummy data

npx prisma db seed

# Running the server locally

npm run sever

The application start on http://localhost:4000/
