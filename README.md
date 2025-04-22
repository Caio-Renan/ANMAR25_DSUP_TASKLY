# ANMAR25_DSUP_TASKLY

A RESTful API built with Node.js, TypeScript, Express, and Prisma to manage categories, notes, and tasks. Designed with a modular architecture, this project emphasizes clean code practices, validation, and error handling.

## 🚀 Technologies Used

- Node.js
- TypeScript
- Express
- Prisma ORM
- Docker & Docker Compose
- Prettier (for code formatting)

## 📜 Available Scripts

These are the npm scripts configured for this project:

| Command | Description |
|--------|-------------|
| `npm run dev` | Runs the development server using `.env.development` with live reload (`tsx watch`). |
| `npm run docker` | Starts the project with Docker in detached mode (`docker-compose up -d`). |
| `npm run docker:down` | Stops and removes the Docker containers. |
| `npm run migrate` | Applies development migrations using Prisma with `.env.development`. |
| `npm run migrate:deploy` | Deploys migrations using `.env.production`. |
| `npm run migrate:reset` | Resets the database and reapplies migrations in development mode. |
| `npm run generate:dev` | Generates Prisma client using `.env.development`. |
| `npm run generate:prod` | Generates Prisma client using `.env.production`. |
| `npm run status` | Shows the status of Prisma migrations (development environment). |
| `npm run build` | Compiles the TypeScript code into JavaScript in the `dist/` folder. |
| `npm start` | Starts the compiled project using `.env.production`. |
| `npm run start:prod` | Builds and then starts the production server. |
| `npm run studio` | Opens Prisma Studio to inspect and edit the database in development. |
| `npm run lint` | Runs ESLint on all `.ts` files for static code analysis. |
| `npm run format` | Formats code using Prettier. |
| `npm test` | Placeholder for future test configuration. Currently throws an error. |


## 🛠️ Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Caio-Renan/ANMAR25_DSUP_TASKLY.git
cd ANMAR25_DSUP_TASKLY
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create .env.development and .env.production as references.

.env.development or env.production example:
```bash
DB_HOST=localhost
DB_USER=testuser
DB_PASSWORD=testpassword
DB_NAME=test_db
DB_PORT=3306
DB_URL="mysql://testuser:testpassword@localhost:3306/test_db"

PORT=4000
```


### 4. Run with Docker
```bash
docker-compose up --build
```

### 5. Run Locally Without Docker
```bash
npm run generate
npm run migrate --name init
npm run dev
```

## 📚 API Endpoints

### 🗂️ Categories

| Method | Endpoint                     | Description                   |
|--------|------------------------------|-------------------------------|
| GET    | `/api/v1/categories`         | Get all categories (with pagination). |
| POST   | `/api/v1/categories`         | Create a new category.        |
| GET    | `/api/v1/categories/:id`     | Get category by ID.           |
| PUT    | `/api/v1/categories/:id`     | Update category by ID.        |
| DELETE | `/api/v1/categories/:id`     | Delete category by ID.        |

### 📝 Notes

| Method | Endpoint                             | Description                                 |
|--------|--------------------------------------|---------------------------------------------|
| GET    | `/api/v1/tasks/:taskId/notes`        | Get all notes for a given task (with pagination). |
| POST   | `/api/v1/tasks/:taskId/notes`        | Create a new note for a task.              |
| GET    | `/api/v1/notes/:id`                  | Get note by ID.                             |
| PUT    | `/api/v1/notes/:id`                  | Update note by ID.                          |
| DELETE | `/api/v1/notes/:id`                  | Delete note by ID.                          |

### ✅ Tasks

| Method | Endpoint                             | Description                                  |
|--------|--------------------------------------|----------------------------------------------|
| GET    | `/api/v1/tasks`                      | Get all tasks (with pagination).             |
| POST   | `/api/v1/tasks`                      | Create a new task.                           |
| GET    | `/api/v1/tasks/status/:status`       | Get tasks filtered by status (with pagination). |
| GET    | `/api/v1/tasks/:id`                  | Get task by ID.                              |
| PUT    | `/api/v1/tasks/:id`                  | Update task by ID.                           |
| DELETE | `/api/v1/tasks/:id`                  | Delete task by ID.                           |

## 📦 Request & Response Examples

---

## ✅ Task

### 📤 Create Task (POST `/api/v1/tasks`)

**Request Body**
```json
{
  "title": "Finish documentation",
  "description": "Complete the API README documentation",
  "status": "TODO",
  "priority": "HIGH",
  "categoryId": 1,
  "isRecurring": false
}
```

**Response Body**
{
  "id": 1,
  "title": "Finish documentation",
  "description": "Complete the API README documentation",
  "status": "TODO",
  "priority": "HIGH",
  "categoryId": 1,
  "isRecurring": false,
  "createdAt": "2025-04-22T15:30:00.000Z",
  "updatedAt": "2025-04-22T15:30:00.000Z"
}

## 📝 Note
### 📤 Create Note (POST /api/v1/tasks/:taskId/notes)

**Request Body**
```json
{
  "content": "Don't forget to push to GitHub",
  "isImportant": true
}
```

**Response Body**
{
  "id": 1,
  "content": "Don't forget to push to GitHub",
  "isImportant": true,
  "taskId": 1,
  "createdAt": "2025-04-22T15:30:00.000Z",
  "updatedAt": "2025-04-22T15:30:00.000Z"
}

## 🗂️ Category
### 📤 Create Category (POST /api/v1/categories)

**Request Body**
```json
{
  "name": "Work"
}

```

**Response Body**
{
  "id": 1,
  "name": "Work",
  "createdAt": "2025-04-22T15:30:00.000Z",
  "updatedAt": "2025-04-22T15:30:00.000Z"
}
