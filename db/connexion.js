const mongoose = require('mongoose');



function connectToMongoDB() {
    return new Promise((resolve, reject) => {
      if (!process.env.MONGO_URI) {
        reject("Please provide the MongoDB URI in the .env file");
      }
  
      mongoose.connect(process.env.MONGO_URI)
      .then(() => {
        console.log("Successfully connected to MongoDB");
        resolve();
      })
      .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
        reject(error);
      });
    });
  }

  module.exports = {
    connectToMongoDB
  }