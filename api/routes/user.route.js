import express from "express";
const router = express.Router();
import { test } from "../controlers/user.controler.js";
router.get("/test",test)
export default router;