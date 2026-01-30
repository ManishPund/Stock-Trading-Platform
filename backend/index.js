require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const PORT = process.env.PORT || 8080;
const dbUrl = process.env.MONGO_URL;

const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    credentials: true,
  }),
);

// 🔹 CONNECT DB FIRST
mongoose
  .set("bufferCommands", false)
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

app.get("/allHoldings", async (req, res) => {
  console.log("holding request receive");
  let allHoldings = await HoldingsModel.find();
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find();
  res.json(allPositions);
});
app.get("/allOrders", async (req, res) => {
  let allOrders = await OrdersModel.find();
  res.json(allOrders);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
  res.send("Order Saved!");
});

app.use("/", authRoute);
app.get("/", (req, res) => {
  res.send({
    activeStatus: true,
    error: false,
  });
});

app.listen(PORT, () => {
  console.log(`App Started on ${PORT}`);
});
