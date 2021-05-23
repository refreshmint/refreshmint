import { Review } from './review';

export interface Item {
    id: number;
    images: string[];
    name: string;
    price: number;
    description: string;
    reviews: Review[];
}
