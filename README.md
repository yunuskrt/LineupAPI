# Lineup API

### Description

**Lineup API** is a backend application built using NestJS to serve as the REST API for a mobile squad guessing game called "Lineup." It interacts with a MongoDB database to provide data related to soccer matches, managers, players, and teams. The API can retrieve matches and apply various filters to the results based on league, season, round, and country.

### Features

- Interacts with a MongoDB database to store and retrieve soccer match data.
- Provides conversions for transforming match records into a desired format by merging team, player, and manager IDs.
- RESTful API design, offering a flexible and scalable interface for frontend/mobile applications.

### Endpoints

#### Retrieve a Random Match

- **GET** `/api/v1/matches`

  Returns a random match from the MongoDB collection with an option to apply filters.

  **Query Parameters**:

  - `league`: Filters matches by league.
  - `season`: Filters matches by season.
  - `round`: Filters matches by round.
  - `country`: Filters matches by country.

  **Response**: A match document formatted with the necessary team, player, and manager details.

### Utilities

#### Conversions

The API includes utilities that handle the transformation of match data:

- Collects team IDs, player IDs, and manager IDs for a specific match.
- Merges the IDs with the match record from the database.
- Transforms the data into the format required by the client application.

### Technologies

- **Node.js** (NestJS framework)
- **MongoDB** for data storage

### Setup & Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/lineup-api.git
   cd lineup-api

   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables for MongoDB connection:
   - Create a .env file in the root directory
   - Add your MongoDB URI.
   ```bash
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority
   ```
   - Add the PORT to run.
   ```bash
   PORT=<port>
   ```
4. Start the server
   ```bash
   npm run start:dev
   ```
