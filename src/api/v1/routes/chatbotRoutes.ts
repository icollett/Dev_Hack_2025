import express, { Response, Request, Router } from "express";
import * as chatbotController from "../controllers/chatbotController";

const router: Router = express.Router();


router.post("/", chatbotController.createMessage);

router.get("/", chatbotController.getChatHistory);

router.delete("/", chatbotController.deleteChatHistory);

export default router
