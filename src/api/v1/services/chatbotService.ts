const {
	GoogleGenerativeAI,
	HarmCategory,
	HarmBlockThreshold,
  } = require("@google/generative-ai");

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

export type MessageResponse = {
	aiResponse: string,
	message: string,
}

let chatHistory: Object[] = [];

export const createMessage = async (params: { message: string }): Promise<MessageResponse> => {
	const userInput:string = params.message;
	console.log(userInput);
	
	const chatSession = model.startChat({
		generationConfig,
		history: chatHistory,
	});
	
	const result = await chatSession.sendMessage(params.message);
	const resultText: string = result.response.text();
	console.log(result.response.text());

	return {aiResponse: resultText, message: params.message}
}

export const getChatHistory = async (): Promise<Object[]> => {
	return chatHistory;
}

export const deleteChatHistory = async (): Promise<void> => {
	chatHistory = [];
}
