import { OpenAIModelsResponse, OpenAIModerationsRequest, OpenAIModerationsResponse, PurGPTKey } from "../types";
import OpenAIChat from "./OpenAIChat";
export default class OpenAI {
    #private;
    chat: OpenAIChat;
    constructor(key: PurGPTKey);
    models(): Promise<OpenAIModelsResponse>;
    moderations(data: OpenAIModerationsRequest): Promise<OpenAIModerationsResponse>;
}
