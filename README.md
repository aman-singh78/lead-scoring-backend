# Backend Assignment

A Node.js backend service built with Express and MongoDB. It provides RESTful endpoints to manage offers and leads, score leads using both rule-based logic and AI, and upload lead data via CSV.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Scripts](#scripts)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features

- **Offer Management:** Create and retrieve offers.
- **Lead Management:** Upload leads via CSV and retrieve lead data.
- **Lead Scoring:** Score leads based on role, industry, and completeness of information using a rule engine and an AI intent classifier.
- **Database Connection:** Connects to MongoDB using Mongoose.
- **AI Integration:** Uses OpenAI's API to classify buying intent.

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
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Start the Server:**
   For development (with nodemon):
   ```sh
   npm run dev
   ```
   For production:
   ```sh
   npm start
   ```

## Configuration

- **Database:** Configured in [`src/config/db.js`](src/config/db.js).
- **Environment Variables:** Defined in the `.env` file in the root directory.

## Project Structure

```
├── .env
├── .gitignore
├── package.json
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

  - `POST /api/offer` - Create a new offer ([`createOffer`](src/controllers/offerController.js)).
  - `GET /api/offers` - Retrieve all offers ([`getOffers`](src/controllers/offerController.js)).

- **Leads**

  - `POST /api/leads/upload` - Upload leads using a CSV file ([`uploadLeads`](src/controllers/leadController.js)).

- **Scoring**
  - `POST /api/score` - Score leads using rule-based and AI methods ([`scoreLeads`](src/controllers/scoreController.js)).
  - `GET /api/results` - Retrieve scored leads ([`getResults`](src/controllers/scoreController.js)).

## Scripts

- **Start Server:** `npm start`
- **Development:** `npm run dev`

## Technologies Used

- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)
- **File Handling:** Multer, csv-parser
- **AI Integration:** OpenAI SDK
- **Environment Management:** dotenv

## License

This project is licensed under the ISC
