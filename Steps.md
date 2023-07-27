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