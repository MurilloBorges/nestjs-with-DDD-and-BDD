import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios';
import adapter from 'axios/lib/adapters/http';
import LoggerHandler from '../logger/logger.handler';

export type NewHttpClientPayload = {
    readonly baseUrl: string;
    readonly headers?: AxiosRequestHeaders;
    readonly params?: object;
    readonly timeout?: number;
};

class HTTPClient {
    private constructor() {}

    public new({ baseUrl, headers, params, timeout }: NewHttpClientPayload): AxiosInstance {
        LoggerHandler.log({
            level: 'debug',
            message: `newHttpClient - Creating new client for baseUrl: ${baseUrl}`,
        });

        return axios.create({
            adapter,
            baseURL: baseUrl,
            headers,
            params,
            timeout,
        });
    }
}

export default HTTPClient;
