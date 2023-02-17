import { StaticImageData } from "next/image";

export type Movie = {
    id: number;
    title: string;
    author: string[];
    cardImage: string | StaticImageData;
    backgroundImage: string | StaticImageData;
}

export type MovieCatalog = {
    id : number;
    title: string;
    release : string;
    mediaDiffusion : string;
    image : string | StaticImageData;
}