import request from "../request";
import { GetPersonalityResponse, Personality, PurGPTKey, RequestEndpoint, RequestMethod } from "../types";

export default class Personalities {
    #key: PurGPTKey;

    constructor(key: PurGPTKey) {
        this.#key = key;
    };

    async getPersonality(personality: Personality): Promise<GetPersonalityResponse> {
        return await request(this.#key, RequestMethod.Post, `${RequestEndpoint.GetPersonalities}/${personality}` as RequestEndpoint) as GetPersonalityResponse;
    };
};