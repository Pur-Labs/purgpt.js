import { OpenAIChatCompletionsRequest, OpenAIChatCompletionsResponse, PurGPTKey } from "../types";
export default class OpenAIChat {
    #private;
    constructor(key: PurGPTKey);
    completions(data: OpenAIChatCompletionsRequest): Promise<OpenAIChatCompletionsResponse>;
}
