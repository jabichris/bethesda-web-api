import express from "express";
import Offerings from "../../../controllers/offerings";

const router = express.Router();

router.post("/create", Offerings.createOffering);

export default router;
