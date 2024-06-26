import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  CustomTitle,
} from './MoviesContainerSection.style';
import { BASE_URL_IMG, api } from '../../../../api/api';
import { IMovieApiData, ISerieApiData } from '../../../../api';
import {
  convertMovieToCardItemProps,
  convertSerieToCardItemProps,
} from '../../../../utils/funstions';
import SliderComponent from '../../../../components/SliderComponent/SliderComponent';

const MoviesContainerSection: React.FC = () => {
  const [moviesArray, setMoviesArray] = React.useState<IMovieApiData[]>([]);
  const [seriesArray, setSeriesArray] = React.useState<ISerieApiData[]>([]);
  const [popularMoviesArray, setPopularMoviesArray] = React.useState<
    IMovieApiData[]
  >([]);

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
        setMoviesArray(filteredMovies);
      } catch (error) {
        console.error('Error fetching films: ', error);
      }
    };
    fetchMovies();
    const fetchSeries = async () => {
      try {
        const seriesList = await api.getTVSeriesList();

        const filteredSeriesList = await Promise.all(
          seriesList.map((movie: ISerieApiData) => {
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
        const filteredSeries = filteredSeriesList.filter(
          (movie) => movie !== null
        );
        setSeriesArray(filteredSeries);
      } catch (error) {
        console.error('Error fetching series: ', error);
      }
    };
    fetchSeries();

    const fetchPopularMovies = async () => {
      try {
        const filmsList = await api.getTop10FilmsByPopularity();

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
        setPopularMoviesArray(filteredMovies);
      } catch (error) {
        console.error('Error fetching films: ', error);
      }
    };
    fetchPopularMovies();
  }, []);

  return (
    <>
      <CustomTitle>{"New releases ▷"}</CustomTitle>
      {moviesArray && (
        <SliderComponent
          sliderItemsArray={convertMovieToCardItemProps(moviesArray)}
        />
      )}
      <CustomTitle>{"Featured TV shows ▷"}</CustomTitle>
      {seriesArray && (
        <SliderComponent
          sliderItemsArray={convertSerieToCardItemProps(seriesArray)}
        />
      )}
      <CustomTitle>{"Most popular movies ▷"}</CustomTitle>
      {popularMoviesArray && (
        <SliderComponent
          sliderItemsArray={convertMovieToCardItemProps(popularMoviesArray)}
        />
      )}
    </>
  );
};

export default React.memo(MoviesContainerSection);
