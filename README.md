# TEDx VETIAS

TEDx VETIAS is a full-stack event website with a public React frontend and an Express/MongoDB backend. It includes public pages for speakers, team, gallery, sponsors, FAQ, and contact, plus an admin area for managing site content.

## Features

- Public TEDx-style website built with React and Material UI
- Admin login with JWT authentication
- Manage speakers, team members, sponsors, gallery items, and contact messages
- Contact form API
- MongoDB data storage with Mongoose models
- Gallery image upload support through `multer`

## Tech Stack

- Frontend: React, React Router, Material UI, Axios, Swiper
- Backend: Node.js, Express, MongoDB, Mongoose
- Auth: JSON Web Tokens, bcrypt
- Uploads: Multer

## Project Structure

```text
tedx-vetias/
  backend/
    models/
    routes/
    middleware/
    seed.js
    server.js
    package.json
  frontend/
    public/
    src/
      components/
      context/
      layouts/
      pages/
      services/
    package.json
```

## Prerequisites

- Node.js
- npm
- MongoDB connection string, either local or hosted

## Backend Setup

1. Go to the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in `backend/`:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/tedx-vetias
JWT_SECRET=replace_with_a_secure_secret
JWT_EXPIRES_IN=7d
CLIENT_URL=http://localhost:3000

ADMIN_EMAIL=admin@tedxvetias.com
ADMIN_PASSWORD=Admin@123
```

4. Seed the admin account:

```bash
node seed.js
```

5. Start the backend server:

```bash
npm run dev
```

The backend runs on `http://localhost:5000` by default.

## Frontend Setup

1. Open a second terminal and go to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the React app:

```bash
npm start
```

The frontend runs on `http://localhost:3000`.

## Available Pages

Public pages:

- `/`
- `/about`
- `/speakers`
- `/team`
- `/gallery`
- `/faq`
- `/sponsors`
- `/contact`

Admin pages:

- `/admin/login`
- `/admin`
- `/admin/speakers`
- `/admin/team`
- `/admin/gallery`
- `/admin/sponsors`
- `/admin/contact`

## API Routes

Base URL: `http://localhost:5000/api`

- `GET /health`
- `POST /auth/login`
- `GET /auth/me`
- `/speakers`
- `/team`
- `/gallery`
- `/sponsors`
- `/contact`

Protected admin routes require a valid JWT token.

## Useful Commands

Backend:

```bash
cd backend
npm run dev
npm start
node seed.js
```

Frontend:

```bash
cd frontend
npm start
npm run build
npm test
```

## Notes

- Change the default admin password after first login.
- Keep `.env` files out of version control.
- The frontend uses a development proxy to `http://localhost:5000`, so API calls can use `/api`.
- Gallery uploads are currently stored as base64 data URLs in MongoDB. For production, use a file storage service such as S3 or Cloudinary.