# Backend Assignment

A Node.js backend service that manages offers, leads, and lead scoring using both rule-based logic and AI services.

## Table of Contents

- [Features](#features)
- [Live API](#live-api)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Scripts](#scripts)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features

- **Offer Management:** Create, update, and retrieve offers.
- **Lead Management:** Upload leads through CSV and retrieve lead records.
- **Lead Scoring:** Score leads using custom rule-based logic along with AI classification for intent.
- **AI Integration:** Utilizes Cohere's API for lead buying intent analysis.
- **Database Connection:** Connects to MongoDB using Mongoose.

## Live API

The backend API is deployed on Vercel. You can access it here:

**Base URL:** `https://backend-assignment-rb7juu635-aman-singh-thapas-projects.vercel.app`

### Example Endpoints

- `GET /` → Check API status (returns "API is running!")
- `POST /api/leads/upload` → Upload a CSV of leads (file must be sent as `file`)
- `GET /api/offers` → Retrieve all offers
- `GET /api/scores` → Retrieve all scores

## Getting Started

1. **Clone the Repository:**

   ```sh
   git clone <repository-url>
   cd backend-assignment
   ```

2. **Install Dependencies:**

   ```sh
   npm install
   ```

3. **Setup Environment Variables:**
   Create a `.env` file in the root directory with the following variables:

   ```dotenv
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   COHERE_API_KEY=your_cohere_api_key
   ```

4. **Start the Server:**
   For development (using nodemon):
   ```sh
   npm run dev
   ```
   For production:
   ```sh
   npm start
   ```

## Configuration

- **Database:** Configured under `src/config/db.js`.
- **Environment Variables:** Managed via the `.env` file in the project root.

## Project Structure

```
├── .env
├── .gitignore
├── package.json
├── README.md
├── src
│   ├── app.js
│   ├── server.js
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   ├── leadController.js
│   │   ├── offerController.js
│   │   └── scoreController.js
│   ├── models
│   │   ├── Lead.js
│   │   └── Offer.js
│   ├── routes
│   │   ├── leadRoutes.js
│   │   ├── offerRoutes.js
│   │   └── scoreRoutes.js
│   └── services
│       ├── aiService.js
│       └── ruleEngine.js
└── uploads
```

## API Endpoints

- **Offers**

  - `POST /api/offer` - Create a new offer.
  - `GET /api/offers` - Retrieve all offers.

- **Leads**

  - `POST /api/leads/upload` - Upload leads using a CSV file.

- **Scoring**
  - `POST /api/score` - Score leads using rule-based and AI analysis.
  - `GET /api/results` - Retrieve the scored leads and their details.

## Scripts

- **Start Server:** `npm start`
- **Development Mode:** `npm run dev`

## Technologies Used

- **Backend:** Node.js, Express
- **Database:** MongoDB with Mongoose
- **File Handling:** Multer, csv-parser
- **AI Integration:** Cohere API for intent classification
- **Environment Management:** dotenv
