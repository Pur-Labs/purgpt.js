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
    #key: PurGPTKey;
    openAI: OpenAI;
    purGPT: PurGPT;
    anthropic: Anthropic;
    google: Google;
    huggingFace: HuggingFace;
    llama: Llama;
    ora: Ora;
    sberbank: Sberbank;

    constructor(key: PurGPTKey) {
        this.#key = key;
        this.openAI = new OpenAI(key);
        this.purGPT = new PurGPT(key);
        this.anthropic = new Anthropic(key);
        this.google = new Google(key);
        this.huggingFace = new HuggingFace(key);
        this.llama = new Llama(key);
        this.ora = new Ora(key);
        this.sberbank = new Sberbank(key);
    };
};