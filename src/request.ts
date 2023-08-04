import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
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

    let response: AxiosResponse;

    try {
        response = await axios(`https://beta.purgpt.xyz/${endpoint}`, request as AxiosRequestConfig);
    } catch (error) {
        response = error?.response;
    };

    if (response.status !== 200) throw new PurGPTError(`API has returned with ${response.status} ${response.statusText}`, response);

    return response.data;
};