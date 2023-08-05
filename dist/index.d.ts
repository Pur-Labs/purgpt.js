import { PurGPTKey } from "./types";
import OpenAI from "./classes/OpenAI";
import PurGPT from "./classes/PurGPT";
import Anthropic from "./classes/Anthropic";
import Google from "./classes/Google";
import HuggingFace from "./classes/HuggingFace";
import Llama from "./classes/Llama";
import Ora from "./classes/Ora";
import Sberbank from "./classes/Sberbank";
export default class PurGPTJS {
    #private;
    openAI: OpenAI;
    purGPT: PurGPT;
    anthropic: Anthropic;
    google: Google;
    huggingFace: HuggingFace;
    llama: Llama;
    ora: Ora;
    sberbank: Sberbank;
    constructor(key: PurGPTKey);
}
