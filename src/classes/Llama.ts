import request from "../request";
import { LlamaEndpoint, LlamaModelsResponse, PurGPTKey, RequestMethod } from "../types";
import LlamaChat from "./LlamaChat";

export default class Llama {
    #key: PurGPTKey;
    chat: LlamaChat;

    constructor(key: PurGPTKey) {
        this.#key = key;
        this.chat = new LlamaChat(key);
    };

    async models(): Promise<LlamaModelsResponse> {
        return await request(this.#key, RequestMethod.Get, LlamaEndpoint.Models) as unknown as LlamaModelsResponse;
    };
};