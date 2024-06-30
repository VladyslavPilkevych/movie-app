import React from 'react';
import TitleComponent from '../../components/TitleComponent';
import { CustomFilterPageContainer, FilterMenuSection, FilteredItemsSection } from './FilterPage.style';
import { BASE_URL_IMG, IMovieApiData, api } from '../../api';
import { IBaseCardData } from '../../types/types';
import { convertMovieToCardItemProps } from '../../utils/funstions';
import { Settings } from 'react-slick';
import SliderComponent from '../../components/SliderComponent';

const FilterPage: React.FC = () => {
  const [filteredArray, setFilteredArray] = React.useState<IBaseCardData[]>([]);

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
        setFilteredArray(convertMovieToCardItemProps(filteredMovies));
      } catch (error) {
        console.error('Error fetching films: ', error);
      }
    };
    fetchMovies();
  }, []); // todo: remove

  const sliderSettings: Settings = React.useMemo(
    () =>
      filteredArray?.length > 0
        ? {
            slidesPerRow: Math.ceil(filteredArray?.length / 5),
          }
        : {},
    [filteredArray]
  );

  return (
    <>
      <CustomFilterPageContainer>
        <TitleComponent style={{ fontSize: '36px' }}>
          {'Filter'}
        </TitleComponent>
        <FilterMenuSection>
          
        </FilterMenuSection>
        <FilteredItemsSection>
          {filteredArray && (
            <>
              <SliderComponent
                sliderItemsArray={filteredArray}
                sliderSettings={sliderSettings}
              />
            </>
          )}
        </FilteredItemsSection>
      </CustomFilterPageContainer>
    </>
  );
};

export default React.memo(FilterPage);
