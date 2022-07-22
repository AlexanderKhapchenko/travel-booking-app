export class Token {
    private readonly key: string;

    constructor(key: string) {
        this.key = key;
    }

    setToken(value: string) {
        localStorage.setItem(this.key, value);
    }

    getToken(): string | null {
        return localStorage.getItem(this.key);
    }
}

export type TToken = InstanceType<typeof Token>;
