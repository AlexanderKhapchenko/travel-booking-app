export class Token {
    setToken(value: string) {
        localStorage.setItem('token', value);
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }
}

export type TToken = InstanceType<typeof Token>;
