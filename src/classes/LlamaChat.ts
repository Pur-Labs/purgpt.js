import request from "../request";
import { LlamaChatCompletionsRequest, LlamaChatCompletionsResponse, LlamaEndpoint, PurGPTKey, RequestMethod } from "../types";

export default class LlamaChat {
    #key: PurGPTKey;

    constructor(key: PurGPTKey) {
        this.#key = key;
    };

    async completions(data: LlamaChatCompletionsRequest): Promise<LlamaChatCompletionsResponse> {
        return await request(this.#key, RequestMethod.Post, LlamaEndpoint.ChatCompletions, data) as unknown as LlamaChatCompletionsResponse;
    };
};