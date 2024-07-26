import React from 'react';
import {
  CustomContentBox,
  CustomMainContent,
  BackgroundImage,
  DarkOverlay,
  MovieInfoContainer,
  MoviePoster,
  MovieTitle,
  MovieDescription,
  AgeRating,
} from './MoviePage.style';
import { IBaseCardData } from '../../types/types';
import { Language } from '../../api';

interface IMoviePageProps {
  movie?: IBaseCardData; // todo: required
}

const MoviePage: React.FC<IMoviePageProps> = (props) => {
  // const { movie } = props; // todo: uncomment
  const movie: IBaseCardData = {
    id: 393209,
    name: 'Avatar 5',
    overview: '',
    popularity: 13.505,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan tortor.',
    originalLanguage: Language.EN,
    adult: true,
    bgImgPath:
      'https://image.tmdb.org/t/p/original/vAvLQOyFoire5x8AmRNfvgkvrMZ.jpg',
    posterPath:
      'https://image.tmdb.org/t/p/original/vAvLQOyFoire5x8AmRNfvgkvrMZ.jpg',
    voteAverage: 0,
    voteCount: 0,
  };
  return (
    <>
      <BackgroundImage bgImgPath={movie.bgImgPath ?? ""}>
        <DarkOverlay>
          <CustomMainContent>
            <CustomContentBox>
              <MovieInfoContainer>
                <MovieTitle>{movie?.name}</MovieTitle>
                <AgeRating>{`Age: ${movie?.adult ? '18+' : '6+'}`}</AgeRating>
                <MovieDescription>{movie?.description}</MovieDescription>
              </MovieInfoContainer>
              <MoviePoster>
                <img src={movie?.posterPath} alt={`${movie?.name} Poster`} />
              </MoviePoster>
            </CustomContentBox>
          </CustomMainContent>
        </DarkOverlay>
      </BackgroundImage>
    </>
  );
};

export default React.memo(MoviePage);
