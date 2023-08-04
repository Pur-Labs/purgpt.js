import request from "../request";
import { PurGPTKey, RequestMethod, SberbankEndpoint, SberbankModelsResponse } from "../types";

export default class Sberbank {
    #key: PurGPTKey;

    constructor(key: PurGPTKey) {
        this.#key = key;
    };

    async models(): Promise<SberbankModelsResponse> {
        return await request(this.#key, RequestMethod.Get, SberbankEndpoint.Models) as unknown as SberbankModelsResponse;
    };
};