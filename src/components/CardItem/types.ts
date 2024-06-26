import { LocalDate } from "js-joda";
import { Language } from "../../api";

export interface IBaseCardData {
    id: number;
    name: string;
    originalLanguage?: Language;
    overview?: string;
    popularity?: number;
    posterPath?: string;
    voteAverage?: number;
    voteCount?: number;
    adult?: boolean;
    releaseDate?: LocalDate;
}
