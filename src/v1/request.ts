import PurGPTError from "../PurGPTError";
import { PurGPTKey, Request, RequestData, RequestEndpoint, RequestMethod, RequestResponse } from "./types";

export default async function request(key: PurGPTKey, method: RequestMethod = RequestMethod.Get, endpoint: RequestEndpoint, data?: RequestData): Promise<RequestResponse> {
    let request: Request = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${key}`
        }
    };

    if (data) request.data = JSON.stringify(data);

    let response = await fetch(`https://beta.purgpt.xyz/v1/${endpoint}`, request as unknown as RequestInit);
    let res: object | string = await response.json().catch(() => response.text().catch(() => response)) as object | string;

    if (!response.ok) throw new PurGPTError(`API has returned with ${response.status} ${response.statusText}`, res);

    return res as RequestResponse;
};