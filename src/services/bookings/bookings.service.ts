import { BookingsApiPath } from "../../common/enums/api/api";
import {THttp} from "../http/http.service";
import {HttpMethod} from "../../common/enums/http/http";
import {ContentType} from "../../common/enums/file/file";

export interface IBookingPost {
    tripId: string,
    userId: string,
    guests: number,
    date: string
}

export interface IBooking {
    id: string,
    userId: string,
    tripId: string,
    guests: number,
    date: string,
    trip: {
        title: string,
        duration: number,
        price: number
    },
    totalPrice: number,
    createdAt: string,
}

export class Bookings {
    private http: THttp;

    constructor(http: THttp) {
        this.http = http;
    }

    get() {
        return this.http.load(BookingsApiPath.BASE, {
            method: HttpMethod.GET,
            needAuthorization: true
        });
    }

    post(book: IBookingPost) {
        return this.http.load(BookingsApiPath.BASE, {
            method: HttpMethod.POST,
            contentType: ContentType.JSON,
            needAuthorization: true,
            payload: book
        });
    }

    delete(id: string) {
        return this.http.load(BookingsApiPath.BASE, {
            method: HttpMethod.DELETE,
            id,
            needAuthorization: true
        });
    }
}

export type TBookings = InstanceType<typeof Bookings>;