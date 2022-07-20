export interface IRequestOptions  {
    needAuthorization?: boolean;
    method:string;
    payload?: any;
    contentType: string;
    accessToken?: string;
}

export interface IAuth {
    token: string,
    user: {
        id: string,
        fullName: string,
        email: string,
        createdAt: string
    }
}