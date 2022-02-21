type InternalTimeoutErrorPayload = {
    readonly milliseconds: number;
    readonly url: string;
};

class InternalTimeoutError extends Error {
    readonly url: string;

    constructor({ milliseconds, url }: InternalTimeoutErrorPayload) {
        super(`Request timed out in ${milliseconds}ms`);
        this.url = url;
    }
}

export default InternalTimeoutError;
