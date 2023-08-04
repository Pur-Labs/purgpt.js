import request from "../request";
import { HuggingFaceDocumentsAskRequest, HuggingFaceDocumentsAskResponse, HuggingFaceEndpoint, PurGPTKey, RequestMethod } from "../types";

export default class HuggingFaceDocuments {
    #key: PurGPTKey;

    constructor(key: PurGPTKey) {
        this.#key = key;
    };

    async ask(data: HuggingFaceDocumentsAskRequest): Promise<HuggingFaceDocumentsAskResponse> {
        return await request(this.#key, RequestMethod.Post, HuggingFaceEndpoint.DocumentsAsk, data) as unknown as HuggingFaceDocumentsAskResponse;
    };
};