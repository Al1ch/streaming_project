import { StaticImageData } from "next/image";

export type Movie = {
    id: number;
    title: string;
    author: string[];
    cardImage: string | StaticImageData;
    backgroundImage: string | StaticImageData;
}