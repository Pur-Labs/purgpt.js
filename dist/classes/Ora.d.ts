import { OraCompletionsRequest, OraCompletionsResponse, OraModelsResponse, PurGPTKey } from "../types";
export default class Ora {
    #private;
    constructor(key: PurGPTKey);
    models(): Promise<OraModelsResponse>;
    completions(data: OraCompletionsRequest): Promise<OraCompletionsResponse>;
}
