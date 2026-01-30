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

mongoose.set("bufferCommands", false);

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

// 🚀 START SERVER ONLY AFTER DB CONNECTS
async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");

    // ✅ ROUTES AFTER DB CONNECTION
    app.get("/allHoldings", async (req, res) => {
      const allHoldings = await HoldingsModel.find();
      res.json(allHoldings);
    });

    app.get("/allPositions", async (req, res) => {
      const allPositions = await PositionsModel.find();
      res.json(allPositions);
    });

    app.get("/allOrders", async (req, res) => {
      const allOrders = await OrdersModel.find();
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

    app.get("/health", (req, res) => {
      res.json({ dbState: mongoose.connection.readyState });
    });

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
  }
}

startServer();

