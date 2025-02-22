import express, { Response, Request, Router } from "express";
import * as chatbotController from "../controllers/chatbotController";

const router: Router = express.Router();


router.post("/", chatbotController.createMessage);

//router.get("/", chatbotController.getChatHistroy);

router.delete("/", chatbotController.deleteChatHistory);

export default router

