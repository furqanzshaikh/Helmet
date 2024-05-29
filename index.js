require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const userRouter = require("./routes/userRoutes.js");

// Custom imports
const connectDb = require("./connection/connectDb");
const User = require("./models/userSchema");

// Initialize Express app
const app = express();
const port = process.env.PORT || 4000;

// Database connection
connectDb();

// Middleware
app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(userRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
