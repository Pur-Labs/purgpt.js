import PurGPTError from "./PurGPTError";
import { FetchRequest, PurGPTKey, Request, RequestEndpoint, RequestMethod } from "./types";

export default async function request(key: PurGPTKey, method: RequestMethod = RequestMethod.Get, endpoint: RequestEndpoint, data?: Request): Promise<Response> {
    let request: FetchRequest = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${key}`
        }
    };

    if (data) request.data = JSON.stringify(data);

    let response = await fetch(`https://beta.purgpt.xyz/${endpoint}`, request as unknown as RequestInit);

    if (!response.ok) throw new PurGPTError(`API has returned with ${response.status} ${response.statusText}`, response);

    let res: Response = await response.json();

    return res;
};