import { HuggingFaceDocumentsAskRequest, HuggingFaceDocumentsAskResponse, PurGPTKey } from "../types";
export default class HuggingFaceDocuments {
    #private;
    constructor(key: PurGPTKey);
    ask(data: HuggingFaceDocumentsAskRequest): Promise<HuggingFaceDocumentsAskResponse>;
}
