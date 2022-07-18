export interface ITravel {
    createdAt: string,
    description: string,
    id: string,
    image: string,
    level: string,
    price: number,
    title: string,
    duration: number
}

export interface IBooking {
    "id": string,
    "userId": string,
    "tripId": string,
    "guests": number,
    "date": string,
    "trip": {
        "title": string,
        "duration": number,
        "price": number
    },
    "totalPrice": number,
    "createdAt": string,
}