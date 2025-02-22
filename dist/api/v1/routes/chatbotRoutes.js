"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import * as chatbotController from "../controllers/chatbotController";
const router = express_1.default.Router();
//router.post("/", chatbotController.createMessage);
router.get("/", (req, res) => {
    res.send("hello world");
});
//router.delete("/", chatbotController.deleteChatHistory);
exports.default = router;
//# sourceMappingURL=chatbotRoutes.js.map