export interface ITravelCardProps {
    id: string,
    image: {
        url: string,
        alt: string
    },
    title: string,
    duration: number,
    description: string,
    level: string,
    price: number
}