import { NextFunction, Request, Response } from "express";
import * as chatbotService from "../services/chatbotService"
import { MessageResponse } from "../services/chatbotService";

export const createMessage = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		const messageResponse: MessageResponse = await chatbotService.createMessage(req.body);

		res.status(201).json({ aiResponse: messageResponse.aiResponse, message: messageResponse.message })
	} catch (error) {
		next(error);
	};
};

export const getChatHistory = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		const chatHistory: any = await chatbotService.getChatHistory();
		res.status(200).json({ chatHistory: chatHistory });

	} catch (error) {
		next(error);
	}
};

export const deleteChatHistory = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		await chatbotService.deleteChatHistory();
		res.status(200).json({ response: "Chat history succesfully deleted" })
	} catch (error) {
		next(error);
	}
}
