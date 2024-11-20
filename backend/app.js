require('dotenv').config()
const express = require("express");
const app = express();
const jobRouter = require("./routes/jobRouter");
const { unknownEndpoint,errorHandler } = require("./middleware/customMiddleware");
const connectDB = require("./config/db");
const cors = require("cors");

/*
The purpose of CORS:

A security feature in browsers that blocks requests from a different origin
(domain, protocol, or port) than the one serving the web application.
By default, browsers restrict cross-origin HTTP requests.
The middleware allows the server to accept requests from other origins, such as
when the frontend (localhost:3000) communicates with the backend (localhost:4000).
*/

// Middlewares
app.use(cors())
app.use(express.json());

connectDB();

// Use the jobRouter for all "/jobs" routes
app.use("/api/jobs", jobRouter);

app.use(unknownEndpoint);
app.use(errorHandler);


app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})  
