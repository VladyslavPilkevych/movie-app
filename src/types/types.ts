import { LocalDate } from "js-joda";
import { Language } from "../api";

export interface ITheme {
  colors: {
    white: string;
    black: string;
    background: string;
    backgroundLight: string;
    creamWhite: string;
    lightBlue: string;
    hoverDarkBlue: string;
    orange: string;
  };
  media: {
    phone: string;
    tablet: string;
    notLaptop: string;
  };
}

export interface IHeaderCarouselItem {
  genre: string;
  name: string;
  text: string;
  imageSrc: string;
}

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
  description?: string;
  bgImgPath?: string;
}
