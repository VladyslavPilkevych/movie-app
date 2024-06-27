import { BASE_URL_IMG, ICardData, IMovieApiData, ISerieApiData } from '../api';
import { IBaseCardData } from '../components/CardItem/types';

export const convertMovieToCardItemProps = (
  moviesArray: IMovieApiData[]
): IBaseCardData[] =>
  moviesArray?.map((movie: IMovieApiData): IBaseCardData => ({
    id: movie?.id,
    name: movie?.title,
    overview: movie?.overview,
    popularity: movie?.popularity,
    originalLanguage: movie?.original_language,
    posterPath: `${BASE_URL_IMG}original${movie?.poster_path}`,
    voteAverage: movie?.vote_average,
    voteCount: movie?.vote_count,
    adult: movie?.adult,
  }));

export const convertSerieToCardItemProps = (
  seriesArray: ISerieApiData[]
): IBaseCardData[] =>
  seriesArray?.map((serie: ISerieApiData): IBaseCardData => ({
    id: serie?.id,
    name: serie?.name,
    overview: serie?.overview,
    popularity: serie?.popularity,
    posterPath: `${BASE_URL_IMG}original${serie?.poster_path}`,
    originalLanguage: serie?.original_language,
    voteAverage: serie?.vote_average,
    voteCount: serie?.vote_count,
    releaseDate: serie?.first_air_date,
  }));
