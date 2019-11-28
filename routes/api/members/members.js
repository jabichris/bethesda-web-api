import express from "express";
import Members from "../../../controllers/members";

const router = express.Router();

router.post("/create", Members.createMember);

export default router;
