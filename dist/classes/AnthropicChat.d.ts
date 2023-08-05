import { AnthropicChatCompletionsRequest, AnthropicChatCompletionsResponse, PurGPTKey } from "../types";
export default class AnthropicChat {
    #private;
    constructor(key: PurGPTKey);
    completions(data: AnthropicChatCompletionsRequest): Promise<AnthropicChatCompletionsResponse>;
}
