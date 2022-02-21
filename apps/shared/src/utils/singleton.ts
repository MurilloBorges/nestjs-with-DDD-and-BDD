class Singlenton {
    private static instance: Singlenton;
    private version: string = 'v1';

    private constructor() {}

    public static get Instance(): Singlenton {
        return this.instance || (this.instance = new this());
    }

    public get ApiVersion(): string {
        return this.version;
    }

    public set ApiVersion(version: string) {
        this.version = version;
    }
}

export default Singlenton;
