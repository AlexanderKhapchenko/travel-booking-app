import { TripsApiPath } from "../../common/enums/api/trips-api-path.enum";
import {THttp} from "../http/http.service";
import {HttpMethod} from "../../common/enums/http/http";
import {ContentType} from "../../common/enums/file/file";

export class Trips {
    private http: THttp;

    constructor(http: THttp) {
        this.http = http;
    }

    getAll() {
        return this.http.load(TripsApiPath.BASE, {
            method: HttpMethod.GET,
            needAuthorization: true
        });
    }

    getOne(id: string) {
        return this.http.load(TripsApiPath.BASE, {
            method: HttpMethod.GET,
            id,
            needAuthorization: true
        });
    }
}

export type TTrips = InstanceType<typeof Trips>;