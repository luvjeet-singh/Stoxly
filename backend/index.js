require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

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
      "http://localhost:3001",
      "https://stoxly-dashboard.onrender.com",
      "http://localhost:3000",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    exposedHeaders: ["Set-Cookie"],
  })
);

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
// app.use(express.static(path.join(__dirname, "build")));

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

const isProduction =
  process.env.NODE_ENV === "production" || process.env.RENDER === "true";

if (isProduction) {
  const buildPath = path.join(__dirname, "build");

  if (fs.existsSync(path.join(buildPath, "index.html"))) {
    app.use(express.static(buildPath));

    app.get("*", (req, res) => {
      res.sendFile(path.join(buildPath, "index.html"));
    });
  } else {
    console.warn(" Build folder not found — skipping static frontend serving.");
  }
}

app.listen(PORT, () => {
  console.log("App started!");
  mongoose.connect(uri);
  console.log("DB connected.");
});
