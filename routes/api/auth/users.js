import express from "express";
import User from "../../../controllers/users";

const router = express.Router();

router.post("/signup", User.addUser);

router.post("/login", User.loginUser);

export default router;
