## Prisma and DB Connection
- Add Prisma to the Project
- Run this command 
```
npx prisma init
```
- Add Database URL into the `.env` file
- Now, in the generated folder `prisma/schema.prisma`. Add data models 
- Add relations
- Migrate and push changes to the database
```
npx prisma migrate dev --name init
```
- Install prisma client
```
npm i @prisma/client
```
- Install `ts-node` and make some changes in `tsconfig.json`
```
npm i --save-dev ts-node
```
- Add `prisma` command in `package.json`
- Now, seed the database. 
```
npx prisma db seed
```
If this gives error, might want to change `moduleResolution: 'node'` in `tsconfig.json` [Refer](https://github.com/cypress-io/cypress/issues/26308)

## GraphQL Queries and Resolvers
- Install modules
```
npm i graphql graphql-yoga
```
- Install `pothos`
```
npm i @pothos/plugin-prisma @pothos/core
```
- Some other modules
```
npm i @apollo/client @pothos/plugin-relay 
```

### Authentication
1. Copy the `Domain`, `ClientID`, `Client Secret` from OAuth into `.env`
2. Install OAuth SDK
```
npm i @auth0/nextjs-auth0
```
3. Install modules for form views
```
npm i react-hook-form react-hot-toast
```