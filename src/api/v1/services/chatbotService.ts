export type MessageResponse = {
	aiResponse: string,
	message: string,
}

export const createMessage = async (params: { message: string }): Promise<MessageResponse> => {
	return { aiResponse: "Hello world", message: params.message };
}

export const getChatHistory = async (): Promise<any> => {
	return { aiResponse: "I'll be back.", message: "params.message" };
}

export const deleteChatHistory = async (): Promise<void> => {
	return;
}
