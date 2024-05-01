import express from "express";
const router = express.Router();
import { test, updateUser } from "../controlers/user.controler.js";
import { verifyToken } from "../utils/verifyUser.js";

router.get("/test",test);
router.put("/update/:userId" ,verifyToken, updateUser);
export default router;