const express = require("express");
const cors = require("cors");
const apiRouter = require("./routes/api");
const connectDatabase = require("./config/db");

const PORT = process.env.PORT || 5000;

const app = express();

connectDatabase();

// Cors used to allow cross-origin communication on localserver between frontend and backend
app.use(cors());

app.use(express.json());

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
