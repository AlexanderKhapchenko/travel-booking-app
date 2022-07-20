import { Http } from "./http/http.service";
import {ENV} from "../common/enums/app/app";
import {Token} from "./token/token.service";
import {Auth} from "./auth/auth.service";

const token = new Token();
const http = new Http(ENV.API.URL as string, token);
const auth = new Auth(http);

export {auth};