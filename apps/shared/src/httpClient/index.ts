import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios';
import adapter from 'axios/lib/adapters/http';
import LogHandler from '../logger/LogHandler';

export type NewHttpClientPayload = {
    readonly baseUrl: string;
    readonly headers?: AxiosRequestHeaders;
    readonly params?: object;
    readonly timeout?: number;
};

function newHttpClient({ baseUrl, headers, params, timeout }: NewHttpClientPayload): AxiosInstance {
    const client = axios.create({
        adapter,
        baseURL: baseUrl,
        headers,
        params,
        timeout,
    });

    LogHandler.log({
        level: 'debug',
        message: `newHttpClient - Creating new client for baseUrl: ${baseUrl}`,
    });

    return client;
}

export default newHttpClient;
