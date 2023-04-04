import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import officeRoutes from "./routes/officeRoutes.js";
import vehicleRoutes from "./routes/vehicleRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import cors from "cors";
import formidableMiddleware from "express-formidable-v2";
import bodyParser from "body-parser";
//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(formidableMiddleware());
app.use(bodyParser.json({ extende: true }));
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use("/api/auth", authRoutes);
app.use("/api/office", officeRoutes);
app.use("/api/vehicle", vehicleRoutes);
app.use("/api/user", userRoutes);
app.use("/api/booking", bookingRoutes);
// app.use("/api/mail", mailRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ASP COURIERS</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
