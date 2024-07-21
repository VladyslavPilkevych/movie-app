import React from 'react';
import {
  CustomContentBox,
  CustomMainContent,
} from './MoviePage.style';
import { IBaseCardData } from '../../types/types';
import TitleComponent from '../../components/TitleComponent';
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
    originalLanguage: Language.EN,
    adult: true,
    posterPath:
      'https://image.tmdb.org/t/p/original/vAvLQOyFoire5x8AmRNfvgkvrMZ.jpg',
    voteAverage: 0,
    voteCount: 0,
  };
  return (
    <>
      <CustomMainContent>
        <CustomContentBox>
          <div>
            <TitleComponent>{movie?.name}</TitleComponent>
            <TitleComponent>{`Age: ${
              movie?.adult ? '18+' : '6+'
            }`}</TitleComponent>
          </div>
          <div>
            <img src={movie?.posterPath} />
          </div>
        </CustomContentBox>
      </CustomMainContent>
    </>
  );
};

export default React.memo(MoviePage);
