const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors'); // Add this line
const app = express();
const db = require('./db/connexion');
const swiishRoute = require('./routes/swiishRoute');

app.use(express.json());
app.use(cors()); // Use cors middleware
dotenv.config();

const PORT = process.env.PORT;

app.use('/api', swiishRoute);

db.connectToMongoDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to server on port: ${PORT}...`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
