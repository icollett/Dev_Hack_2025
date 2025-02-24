import { NextFunction, Request, Response } from "express";
import * as gamesService from "../services/gamesService"

export const getQuizQuestion = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		console.log(req.query);
		const question: string = await gamesService.getQuestion(req.query);
		res.status(200).json(question);
	} catch (error) {
		next(error);
	}
}
