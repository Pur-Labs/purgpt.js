import { PurGPTKey, SberbankModelsResponse } from "../types";
export default class Sberbank {
    #private;
    constructor(key: PurGPTKey);
    models(): Promise<SberbankModelsResponse>;
}
