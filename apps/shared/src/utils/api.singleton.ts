class ApiSinglenton {
    private static instance: ApiSinglenton;
    private static version: string = 'v1';

    constructor() {}

    public static get Instance(): ApiSinglenton {
        return this.instance || (this.instance = new this());
    }

    public static get Version(): string {
        return this.version;
    }

    public static set Version(version: string) {
        this.version = version;
    }
}

export default ApiSinglenton;
