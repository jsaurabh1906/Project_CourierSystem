import express from "express";
import { addBookingController } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", addBookingController);

export default router;
