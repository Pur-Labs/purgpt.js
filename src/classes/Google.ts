import request from "../request";
import { GoogleCompletionsRequest, GoogleCompletionsResponse, GoogleEndpoint, GoogleModelsResponse, PurGPTKey, RequestMethod } from "../types";

export default class Google {
    #key: PurGPTKey;

    constructor(key: PurGPTKey) {
        this.#key = key;
    };

    async models(): Promise<GoogleModelsResponse> {
        return await request(this.#key, RequestMethod.Get, GoogleEndpoint.Models) as unknown as GoogleModelsResponse;
    };

    async completions(data: GoogleCompletionsRequest): Promise<GoogleCompletionsResponse> {
        return await request(this.#key, RequestMethod.Post, GoogleEndpoint.Completions, data) as unknown as GoogleCompletionsResponse;
    };
};