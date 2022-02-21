import InternalTimeoutError from '../exceptions/InternalTimeoutError';
import { AxiosInstance, AxiosRequestConfig, CancelTokenSource } from 'axios';

export type RequestWrapperPayload = {
    readonly httpClientInstance: AxiosInstance;
    readonly requestOptions: AxiosRequestConfig;
    readonly cancelToken: CancelTokenSource;
    readonly defaultTimeout: number;
};

class RequestWrapper {
    async request({
        httpClientInstance,
        requestOptions,
        cancelToken,
        defaultTimeout,
    }: RequestWrapperPayload) {
        const requestUrl = `${httpClientInstance.defaults.baseURL}${requestOptions.url}`;
        const requestTimeout =
            Number(httpClientInstance.defaults.timeout) ||
            Number(requestOptions.timeout) ||
            Number(defaultTimeout);

        const timeoutPromise: Promise<NodeJS.Timeout> = new Promise((resolve, reject) => {
            const id = setTimeout(() => {
                clearTimeout(id);
                cancelToken.cancel();
                reject(
                    new InternalTimeoutError({
                        milliseconds: Number(requestTimeout),
                        url: requestUrl,
                    })
                );
            }, Number(requestTimeout));
        });

        const responsePromise: Promise<any> = httpClientInstance(requestOptions);

        return Promise.race([responsePromise, timeoutPromise]);
    }
}

export default new RequestWrapper();
