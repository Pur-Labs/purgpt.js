import { LlamaModelsResponse, PurGPTKey } from "../types";
import LlamaChat from "./LlamaChat";
export default class Llama {
    #private;
    chat: LlamaChat;
    constructor(key: PurGPTKey);
    models(): Promise<LlamaModelsResponse>;
}
