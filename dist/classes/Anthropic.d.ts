import { AnthropicModelsResponse, PurGPTKey } from "../types";
import AnthropicChat from "./AnthropicChat";
export default class Anthropic {
    #private;
    chat: AnthropicChat;
    constructor(key: PurGPTKey);
    models(): Promise<AnthropicModelsResponse>;
}
