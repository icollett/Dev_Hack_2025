"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteChatHistory = exports.getChatHistory = exports.createMessage = void 0;
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold, } = require("@google/generative-ai");
require('dotenv').config();
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: "Act as a senior cyber security professional with experience in identifying and preventing fraud. Evaluate messages provided by users and advise them on wether or not they could be fraudulent. Provide a brief explanation on why it could be a scam and advise the users on next steps to take to protect their information. The amount of response text should should be suitable for a mobile format.",
});
const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 800,
    responseMimeType: "text/plain",
};
let chatHistory = [];
const createMessage = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const userInput = params.message;
    console.log(userInput);
    const chatSession = model.startChat({
        generationConfig,
        history: chatHistory,
    });
    const result = yield chatSession.sendMessage(params.message);
    const resultText = result.response.text();
    console.log(result.response.text());
    return { aiResponse: resultText, message: params.message };
});
exports.createMessage = createMessage;
const getChatHistory = () => __awaiter(void 0, void 0, void 0, function* () {
    return chatHistory;
});
exports.getChatHistory = getChatHistory;
const deleteChatHistory = () => __awaiter(void 0, void 0, void 0, function* () {
    chatHistory = [];
});
exports.deleteChatHistory = deleteChatHistory;
//# sourceMappingURL=chatbotService.js.map