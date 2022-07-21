import { THttp} from "../http/http.service";
import {AuthApiPath} from "../../common/enums/api/auth-api-path.enum";
import {HttpMethod} from "../../common/enums/http/http-method.enum";
import {ContentType} from "../../common/enums/file/file.enum";

export class Auth {
    private http: THttp;

    constructor(http: THttp) {
        this.http = http;
    }

    login(email: string, password: string) {
        return this.http.load(AuthApiPath.SIGN_IN, {
            method: HttpMethod.POST,
            contentType: ContentType.JSON,
            payload: {email, password}
        });
    }

    register(fullName: string, password: string, email: string) {
        return this.http.load(AuthApiPath.SIGN_UP, {
            method: HttpMethod.POST,
            contentType: ContentType.JSON,
            payload: {fullName, password, email}
        });
    }

    getAuthenticatedUser() {
        return this.http.load(AuthApiPath.AUTHENTICATED_USER, {
            method: HttpMethod.GET,
            needAuthorization: true,
        });
    }
}

export type TAuth = InstanceType<typeof Auth>;