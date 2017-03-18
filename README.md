### steps to get this working

### postgres install and environment variables
- youll need to install postgres on your computer and create a database called todoapp
and export environment variables for the following fields:
- USERNAME = your postgres username
- POSTGRES_PASSWORD = your postgres username
- TODO_DB = todoapp
- APP_HOST = localhost:9000

### project setup
- clone this project
navigate to project root, run:
```npm install```
- to install needed dependencies

- next run:
```npm run remake-db```
- to create needed database tables

- and finally
```npm run build && node server```
- to build and run the server

then open your browser to localhost:9000