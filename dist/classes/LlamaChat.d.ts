import { LlamaChatCompletionsRequest, LlamaChatCompletionsResponse, PurGPTKey } from "../types";
export default class LlamaChat {
    #private;
    constructor(key: PurGPTKey);
    completions(data: LlamaChatCompletionsRequest): Promise<LlamaChatCompletionsResponse>;
}
