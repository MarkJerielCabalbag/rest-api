const express = require("express");
require("dotenv").config();
const deanRouter = require("./backend/routes/deanRoutes.js");
const cardRouter = require("./backend/routes/cardRoutes.js");
const { connectDB } = require("./backend/config/connectDB.js");
const cors = require("cors");
connectDB();
const app = express();
const PORT = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/rfid-ispsc/dean", deanRouter);
app.use("/rfid-ispsc/card", cardRouter);

app.listen(PORT, () => {
  console.log(`server is running in port ${PORT}`);
});
