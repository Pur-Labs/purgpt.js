import { OpenAIEndpoint, OpenAIModelsResponse, OpenAIModerationsRequest, OpenAIModerationsResponse, PurGPTKey, RequestMethod } from "../types";
import request from "../request";
import OpenAIChat from "./OpenAIChat";

export default class OpenAI {
    #key: PurGPTKey;
    chat: OpenAIChat;

    constructor(key: PurGPTKey) {
        this.#key = key;
        this.chat = new OpenAIChat(key);
    };

    async models(): Promise<OpenAIModelsResponse> {
        return await request(this.#key, RequestMethod.Get, OpenAIEndpoint.Models) as unknown as OpenAIModelsResponse;
    };

    async moderations(data: OpenAIModerationsRequest): Promise<OpenAIModerationsResponse> {
        return await request(this.#key, RequestMethod.Post, OpenAIEndpoint.Moderations, data) as unknown as OpenAIModerationsResponse;
    };
};