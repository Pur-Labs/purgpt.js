import { OpenAIChatCompletionsRequest, OpenAIChatCompletionsResponse, OpenAIEndpoint, PurGPTKey, RequestMethod } from "../types";
import request from "../request";

export default class OpenAIChat {
    #key: PurGPTKey;

    constructor(key: PurGPTKey) {
        this.#key = key;
    };

    async completions(data: OpenAIChatCompletionsRequest): Promise<OpenAIChatCompletionsResponse> {
        return await request(this.#key, RequestMethod.Post, OpenAIEndpoint.ChatCompletions, data) as unknown as OpenAIChatCompletionsResponse;
    };
};