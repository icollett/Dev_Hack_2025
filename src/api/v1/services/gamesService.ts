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

export type questionParams = {
	format: string,
	topic: string,
}

export const getQuestion = async (params: Partial<questionParams>): Promise<string> => {
	console.log(params);
	const chatSession = model.startChat({
		generationConfig,
	});

	const promptMessage: string = `Please give me a scenario in the format of an ${params.format}, on the topic of ${params.topic}.`;
	
	const result = await chatSession.sendMessage(promptMessage);
	const resultText: string = JSON.parse(result.response.text());
	console.log(resultText);

	return resultText;
}
