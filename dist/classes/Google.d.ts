import { GoogleCompletionsRequest, GoogleCompletionsResponse, GoogleModelsResponse, PurGPTKey } from "../types";
export default class Google {
    #private;
    constructor(key: PurGPTKey);
    models(): Promise<GoogleModelsResponse>;
    completions(data: GoogleCompletionsRequest): Promise<GoogleCompletionsResponse>;
}
