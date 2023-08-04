import request from "../request";
import { PurGPTKey, RequestMethod, SberbankEndpoint, SberbankImagesGenerationsRequest, SberbankImagesGenerationsResponse } from "../types";

export default class SberbankImages {
    #key: PurGPTKey;

    constructor(key: PurGPTKey) {
        this.#key = key;
    };

    async generations(data: SberbankImagesGenerationsRequest): Promise<SberbankImagesGenerationsResponse> {
        return await request(this.#key, RequestMethod.Post, SberbankEndpoint.ImagesGenerations, data) as unknown as SberbankImagesGenerationsResponse;
    };
};