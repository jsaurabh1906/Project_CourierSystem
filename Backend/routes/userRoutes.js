import express from "express";
import {
  addUserController,
  deleteUser,
  editUser,
  getUserById,
  getUsers,
} from "../controllers/userController.js";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";

const router = express.Router();

//addUser
router.post("/adduser",  addUserController);

router.get("/getuser", getUsers);

router.get("/getuser/:id", getUserById);
router.put("/updateuser/:id", editUser);
router.delete("/deleteuser/:id", deleteUser);

export default router;
