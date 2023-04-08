const express = require("express");
const cors = require("cors");
require("dotenv").config();
const colors = require("colors");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db");
port = process.env.PORT || 5000;

connectDB();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);
app.listen(port, console.log("Server running on port " + port));
