import Chat from "./classes/Chat";
import Personalities from "./classes/Personalities";
import request from "./request";
import { CreateCompletionResponse, CreateCompletionSettings, Personality, PurGPTKey, RequestEndpoint, RequestMethod } from "./types";
import PurGPTError from "../PurGPTError";

const PurGPT = class {
    #key: PurGPTKey;
    chat: Chat;
    personalities: Personalities;

    constructor(key: PurGPTKey) {
        this.#key = key;
        this.chat = new Chat(this.#key);
        this.personalities = new Personalities(this.#key);
    };

    async createCompletion(settings: CreateCompletionSettings): Promise<CreateCompletionResponse> {
        return await request(this.#key, RequestMethod.Post, RequestEndpoint.CreateCompletion, settings) as CreateCompletionResponse;
    };

    async getPersonalities(): Promise<Personality[]> {
        return await request(this.#key, RequestMethod.Get, RequestEndpoint.GetPersonalities) as Personality[];
    };
};

export {
    PurGPT,
    PurGPTError,
    request,
    Chat,
    Personalities
};