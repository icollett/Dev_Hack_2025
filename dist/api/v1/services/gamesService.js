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
exports.getQuestion = void 0;
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold, } = require("@google/generative-ai");
require('dotenv').config();
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: "You are a seasoned cyber security professional turned educator. You use your extensive knowledge of fraud and scams to create a quiz question for learners with different levels of fraud awareness to test their knowledge. You can create a sample suspicious communication in different forms. The communication being not longer than a paragraph, and comes with a set of 4 multiple choice answers related to the example, with one answer being the correct identifier for why the provided message is suspisious.  Format your response in JSON to make it easier to parse into a website. Do NOT put and intro, make sure response is only in JSON format.",
});
const generationConfig = {
    temperature: 1.0,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 800,
    responseMimeType: "application/json",
    responseSchema: {
        type: "object",
        properties: {
            quizItem: {
                type: "object",
                properties: {
                    messageType: {
                        type: "string"
                    },
                    scenario: {
                        type: "string"
                    },
                    message: {
                        type: "string"
                    },
                    question: {
                        type: "string"
                    },
                    answers: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                text: {
                                    type: "string"
                                },
                                correct: {
                                    type: "boolean"
                                }
                            }
                        }
                    },
                    explanation: {
                        type: "string"
                    }
                },
                required: [
                    "scenario",
                    "message",
                    "question",
                    "answers",
                    "explanation"
                ]
            }
        }
    },
};
const getQuestion = (params) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(params);
    const chatSession = model.startChat({
        generationConfig,
    });
    const promptMessage = `Please give me a scenario in the format of an ${params.format}, on the topic of ${params.topic}.`;
    const result = yield chatSession.sendMessage(promptMessage);
    const resultText = JSON.parse(result.response.text());
    console.log(resultText);
    return resultText;
});
exports.getQuestion = getQuestion;
//# sourceMappingURL=gamesService.js.map