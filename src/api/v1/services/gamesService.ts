export type questionParams = {
	format: string,
	difficulty: string,
	topic: string,
}

export const getQuestion = async (params: Partial<questionParams>): Promise<string> => {
	return "Get the question."
}
