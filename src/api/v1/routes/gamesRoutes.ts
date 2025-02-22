import express, { Router } from "express";
import * as gamesController from "../controllers/gamesController";

const router: Router = express.Router();


router.get("/quiz", gamesController.getQuizQuestion);

export default router;
