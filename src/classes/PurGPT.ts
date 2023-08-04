import request from "../request";
import { PurGPTEndpoint, PurGPTKey, PurGPTPersonalitiesResponse, RequestMethod } from "../types";

export default class PurGPT {
    #key: PurGPTKey;

    constructor(key: PurGPTKey) {
        this.#key = key;
    };

    async personalities(): Promise<PurGPTPersonalitiesResponse> {
        return await request(this.#key, RequestMethod.Get, PurGPTEndpoint.Personalities) as unknown as PurGPTPersonalitiesResponse;
    };
};