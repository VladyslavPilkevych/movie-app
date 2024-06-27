import { LocalDate } from "js-joda";
import { Language } from "./constants";


export interface ICardData {
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    name: string;
    original_language: Language;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    adult?: boolean;
    first_air_date?: LocalDate;
}

export interface IMovieApiData {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: Language;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: LocalDate;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface ISerieApiData {
    backdrop_path: string;
    first_air_date: LocalDate;
    genre_ids: number[];
    id: number;
    name: string;
    origin_country: string[];
    original_language: Language;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
}
