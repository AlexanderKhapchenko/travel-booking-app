import {HttpHeader, HttpMethod} from "../../common/enums/http/http";
import {IAuth, IRequestOptions} from "./interface";
import {AuthApiPath} from "../../common/enums/api/auth-api-path.enum";
import {ContentType} from "../../common/enums/file/file.enum";
import {TToken} from "../token/token.service";
import {ENV} from "../../common/enums/app/app";

class Http {
  private readonly baseUrl: string;
  private token: TToken;

  constructor(baseUrl: string, token: TToken) {
    this.baseUrl = baseUrl;
    this.token = token;
  }

  public getAuthenticatedUser(): Promise<IAuth> {
    return this.load(AuthApiPath.AUTHENTICATED_USER, {
      method: HttpMethod.GET,
      contentType: ContentType.JSON,
      needAuthorization: true,
    });
  }

  load(url: string, options :IRequestOptions) {
    const { method = HttpMethod.GET, payload = null, contentType, needAuthorization = false, id } = options;
    const headers = this.getHeaders({
      contentType,
      needAuthorization,
      accessToken: this.token.getToken() || '',
    });

    const body = payload ? JSON.stringify(payload) : null

    return fetch(this.getFullUrl(url, id as string), {
      method,
      headers,
      body,
    })
      .then(this.checkStatus)
      .then(this.parseJSON)
      .then((data) => {
        if(data.token) {
          this.token.setToken(data.token);
        }
        return data;
      })
      .catch(this.throwError);
  }

  private getFullUrl(basePath: string, id: string): string {
    return `${this.baseUrl}${basePath}${id ? `/${id}` : ''}`;
  }

  getHeaders({ contentType, needAuthorization, accessToken }: Partial<IRequestOptions>) {
    const headers = new Headers();

    if (contentType) {
      headers.append(HttpHeader.CONTENT_TYPE, contentType);
    }

    if (needAuthorization) {
      headers.append(HttpHeader.AUTHORIZATION, `Bearer ${accessToken}`)
    }

    return headers;
  }

  checkStatus(response: Response) {
    const { ok: isOk, status, statusText } = response;

    if (!isOk) {
      throw new Error(`${status}: ${statusText}`);
    }

    return response;
  }

  parseJSON(response: Response) {
    return response.json();
  }

  throwError(err: Error) {
    throw err;
  }
}

export { Http };
export type THttp = InstanceType<typeof Http>;
