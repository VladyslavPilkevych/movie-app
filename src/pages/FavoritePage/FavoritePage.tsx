import React from 'react';
import { IBaseCardData } from '../../types/types';
import { BASE_URL_IMG, IMovieApiData, api } from '../../api';
import { convertMovieToCardItemProps } from '../../utils/funstions';
import SliderComponent from '../../components/SliderComponent';
import { Settings } from 'react-slick';
import TitleComponent from '../../components/TitleComponent';

const FavoritePage: React.FC = () => {
  const [favoriteArray, setFavoriteArray] = React.useState<IBaseCardData[]>([]);

  React.useEffect(() => {
    const fetchMovies = async () => {
      try {
        const filmsList = await api.getFilmsList();

        const filteredFilmList = await Promise.all(
          filmsList.map((movie: IMovieApiData) => {
            return new Promise((resolve) => {
              const img = new Image();
              img.src = `${BASE_URL_IMG}original${movie?.poster_path}`;

              img.onload = function () {
                console.log('Image loaded successfully');
                resolve(movie);
              };
              img.onerror = function () {
                console.log('Image failed to load');
                resolve(null);
              };
            });
          })
        );
        const filteredMovies = filteredFilmList.filter(
          (movie) => movie !== null
        );
        setFavoriteArray(convertMovieToCardItemProps(filteredMovies));
      } catch (error) {
        console.error('Error fetching films: ', error);
      }
    };
    fetchMovies();
  }, []); // todo: change mocks to my BE data

  const sliderSettings: Settings = React.useMemo(
    () =>
      favoriteArray?.length > 0
        ? {
            slidesPerRow: Math.ceil(favoriteArray?.length / 6),
          }
        : {},
    [favoriteArray]
  );
  
  React.useEffect(() => {
    console.log(favoriteArray[0])
  }, [favoriteArray]);

  React.useEffect(() => {
    console.log(sliderSettings)
  }, [sliderSettings]);

  return (
    <>
        <TitleComponent style={{fontSize: "36px"}}>{`Favorite: ${favoriteArray?.length ?? 0}`}</TitleComponent>
        {favoriteArray && (
          <>
            <SliderComponent
              sliderItemsArray={favoriteArray}
              sliderSettings={sliderSettings}
            />
          </>
        )}
    </>
  );
};

export default React.memo(FavoritePage);
