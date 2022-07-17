export interface ITravelListResponse {
    createdAt: string,
    description: string,
    id: string,
    image: string,
    level: string,
    price: number,
    title: string,
    duration: number
}

interface IBookingList {
    "id": string,
    "userId": string,
    "tripId": string,
    "guests": 2,
    "date": string,
    "trip": {
        "title": string,
        "duration": number,
        "price": number
    },
    "totalPrice": number,
    "createdAt": string
}

export const getTravelList = async (): Promise<Array<ITravelListResponse>> => {
    const response = await fetch('https://raw.githubusercontent.com/BinaryStudioAcademy/react-homework/production/homework/data/trips.json');
    const result = await response.json();
    return result;
}

export const getBookingList = async (): Promise<Array<IBookingList>> => {
    const response = await fetch('https://raw.githubusercontent.com/BinaryStudioAcademy/react-homework/production/homework/data/bookings.json');
    const result = await response.json();
    return result;
}
