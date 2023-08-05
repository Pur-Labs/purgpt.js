import { HuggingFaceModelsResponse, PurGPTKey } from "../types";
export default class HuggingFace {
    #private;
    constructor(key: PurGPTKey);
    models(): Promise<HuggingFaceModelsResponse>;
}
