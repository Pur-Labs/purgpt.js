import { PurGPTKey, PurGPTPersonalitiesResponse } from "../types";
export default class PurGPT {
    #private;
    constructor(key: PurGPTKey);
    personalities(): Promise<PurGPTPersonalitiesResponse>;
}
