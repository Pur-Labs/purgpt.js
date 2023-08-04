import request from "../request";
import { OraCompletionsRequest, OraCompletionsResponse, OraEndpoint, OraModelsResponse, PurGPTKey, RequestMethod } from "../types";

export default class Ora {
    #key: PurGPTKey;

    constructor(key: PurGPTKey) {
        this.#key = key;
    };

    async models(): Promise<OraModelsResponse> {
        return await request(this.#key, RequestMethod.Get, OraEndpoint.Models) as unknown as OraModelsResponse;
    };

    async completions(data: OraCompletionsRequest): Promise<OraCompletionsResponse> {
        return await request(this.#key, RequestMethod.Post, OraEndpoint.Completions, data) as unknown as OraCompletionsResponse;
    };
};