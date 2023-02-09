import { StaticImageData } from "next/image";

export type Film = {
    id: number;
    title: string;
    author: string[];
    cardImage: string | StaticImageData;
    backgroundImage: string | StaticImageData;
}