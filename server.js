const express = require("express");
const dotenv = require("dotenv");

//Middleware
const morgan = require("morgan");

//Load env vars
dotenv.config({ path: "./config/config.env" });

//Initialize Express
const app = express();

//Define Port
const PORT = process.env.PORT || 5000;

//Dev loggin middleware

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//ROUTES
const bootcamps = require("./routes/bootcampsRoutes");

//======================================================================

app.use("/api/v1/bootcamps", bootcamps);

//======================================================================
app.listen(PORT, () =>
  console.log(`Server Running in ${process.env.NODE_ENV} mode on Port: ${PORT}`)
);
