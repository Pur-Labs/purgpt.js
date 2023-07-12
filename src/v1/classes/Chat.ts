import request from "../request";
import { CreateChatCompletionResponse, CreateChatCompletionSettings, PurGPTKey, RequestEndpoint, RequestMethod } from "../types";

/**
 * Given a list of messages comprising a conversation, the model will return a response.
 */
export default class Chat {
    #key: PurGPTKey;

    constructor(key: PurGPTKey) {
        this.#key = key;
    };

    /**
     * Creates a model response for the given chat conversation.
     */
    async createChatCompletion(settings: CreateChatCompletionSettings): Promise<CreateChatCompletionResponse> {
        return await request(this.#key, RequestMethod.Post, RequestEndpoint.CreateChatCompletion, settings) as CreateChatCompletionResponse;
    };
};