if (process.env.USER) require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();
const moviesRouter = require("./movies/movies.router");
const theatersRouter = require("./theaters/theaters.router");
const reviewsRouter = require("./reviews/reviews.router");

// Serve the frontend HTML, CSS, and JavaScript
app.use(express.static(path.join(__dirname, "../starter-movie-front-end-main")));

// TODO: Add your code here
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

app.use(express.json());

app.use("/movies", moviesRouter);
app.use("/theaters", theatersRouter);
app.use("/reviews", reviewsRouter);


// Handle unmatched routes
app.use(notFound);

// Error handler must come after routes
app.use(errorHandler);

module.exports = app;
