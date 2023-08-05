import { PurGPTKey, Request, RequestEndpoint, RequestMethod } from "./types";
export default function request(key: PurGPTKey, method: RequestMethod, endpoint: RequestEndpoint, data?: Request): Promise<Response>;
