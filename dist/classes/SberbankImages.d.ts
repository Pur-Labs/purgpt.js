import { PurGPTKey, SberbankImagesGenerationsRequest, SberbankImagesGenerationsResponse } from "../types";
export default class SberbankImages {
    #private;
    constructor(key: PurGPTKey);
    generations(data: SberbankImagesGenerationsRequest): Promise<SberbankImagesGenerationsResponse>;
}
