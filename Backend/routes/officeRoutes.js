import express from "express";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import { isSystemUser } from "./../middlewares/authMiddleware.js";
import {
  createOfficeController,
  deleteOfficeController,
  getOfficeController,
  getSingleOfficeController,
  updateOfficeController,
} from "./../controllers/OfficeController.js";

const router = express.Router();

//route

router.post(
  "/create-office",
  requireSignIn,
  isSystemUser,
  createOfficeController
);

//get Offices
router.get("/get-office", getOfficeController);

//get Single Office
router.get("/get-office/:slug", getSingleOfficeController);

//delete Office
router.delete("/office", deleteOfficeController);

router.put(
  "/update-office/:pid",
  requireSignIn,
  isSystemUser,
  updateOfficeController
);

export default router;
