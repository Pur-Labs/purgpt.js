import request from "../request";
import { AnthropicChatCompletionsRequest, AnthropicChatCompletionsResponse, AnthropicEndpoint, PurGPTKey, RequestMethod } from "../types";

export default class AnthropicChat {
    #key: PurGPTKey;

    constructor(key: PurGPTKey) {
        this.#key = key;
    };

    async completions(data: AnthropicChatCompletionsRequest): Promise<AnthropicChatCompletionsResponse> {
        return await request(this.#key, RequestMethod.Post, AnthropicEndpoint.ChatCompletions, data) as unknown as AnthropicChatCompletionsResponse;
    };
};