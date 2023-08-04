import request from "../request";
import { AnthropicEndpoint, AnthropicModelsResponse, PurGPTKey, RequestMethod } from "../types";
import AnthropicChat from "./AnthropicChat";

export default class Anthropic {
    #key: PurGPTKey;
    chat: AnthropicChat;

    constructor(key: PurGPTKey) {
        this.#key = key;
        this.chat = new AnthropicChat(key);
    };

    async models(): Promise<AnthropicModelsResponse> {
        return await request(this.#key, RequestMethod.Get, AnthropicEndpoint.Models) as unknown as AnthropicModelsResponse;
    };
};