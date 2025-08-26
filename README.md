### Summary

# Tech stack

- [ ] Why ORM - Prisma
- [ ] Why supabase
- [ ] Why express
- [ ] Indexing db columns

## Assumptions

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

- A lot more thought and testing would need to go into security. This would include:
  encryption, protecting routes, granular RBAC controls
- A strategy would need to be in place to handle updating database schemas and deploying updates through CI/CD
- Add unit tests
- Supabase supports realtime. This needs enabling in the platform and handled on the FE.

# Other considerations

- Extend api's to handle rate limits, cursors for pagination and direct filtering on data e.g. by device type
- Update the API's to only return devices based on the user logged in.

# Challenges

- Dealing with supabase going down :( - https://status.supabase.com/incidents/z7jrr0ngpnzb
