import express from "express";

const router = express.Router();

import * as studentController from "../controller/student.controller.js";

router.get("/student", studentController.getStudent);

export default router;
