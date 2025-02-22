const {
	GoogleGenerativeAI,
	HarmCategory,
	HarmBlockThreshold,
  } = require("@google/generative-ai");

require('dotenv').config();

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

export type questionParams = {
	format: string,
	difficulty: string,
	topic: string,
}

export const getQuestion = async (params: Partial<questionParams>): Promise<string> => {
	return "Get the question."
}
