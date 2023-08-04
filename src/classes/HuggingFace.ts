import request from "../request";
import { HuggingFaceEndpoint, HuggingFaceModelsResponse, PurGPTKey, RequestMethod } from "../types";

export default class HuggingFace {
    #key: PurGPTKey;

    constructor(key: PurGPTKey) {
        this.#key = key;
    };

    async models(): Promise<HuggingFaceModelsResponse> {
        return await request(this.#key, RequestMethod.Get, HuggingFaceEndpoint.Models) as unknown as HuggingFaceModelsResponse;
    };
};