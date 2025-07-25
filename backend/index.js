require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(
  cors({
    origin: [
      "https://stoxly.onrender.com",
      // "https://stoxly-backend.onrender.com",
      // "https://main.dijpxhq9vdeby.amplifyapp.com",
      // "https://main.d3dm915kte212h.amplifyapp.com",
      "http://localhost:3001",
      "https://stoxly-dashboard.onrender.com",
      "http://localhost:3000",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    exposedHeaders: ["Set-Cookie"],
  })
);

app.options("*", cors());
app.use(cookieParser());
app.use(express.json());

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});

app.get("/allOrders", async (req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

app.use("/", authRoute);

mongoose
  .connect(uri)
  .then(() => {
    console.log("DB connected.");
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to DB:", err);
  });
