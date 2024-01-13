import React, { FC, memo } from 'react';
import Slider from 'react-slick';
import MovieItem from '../MovieItem/MovieItem';
import imgWonderWoman from '../../assets/images/itemImg.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CustomTitle, NextArrow, PrevArrow } from './MoviesContainerStyles';
import { BASE_URL_IMG, api } from '../../api/api';

const MoviesContainer: FC = () => {
  const obj = {
    genre: 'Fantasy',
    name: 'Wonder Woman 1984',
    text: '...',
    imageSrc: imgWonderWoman,
  };
  const settings = {
    centerMode: true,
    infinite: true,
    swipeToSlide: true,
    // speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const [moviesArray, setMoviesArray] = React.useState();

  React.useEffect(() => {
    api
      .getFilmsList()
      .then((filmsList) => {
        console.log(filmsList);
        setMoviesArray(filmsList);
      })
      .catch((error) => {
        console.error('Error fetching films:', error);
      });
  }, [])

  React.useEffect(() => {
    console.log(moviesArray);
  }, [moviesArray]);

  return (
    // <CustomContainer>
    <>
      <CustomTitle>New releases ▷</CustomTitle>
      <div style={{ width: '100%', margin: '15px auto' }}>
        <Slider {...settings}>
          {moviesArray && moviesArray?.map((movie) => {
            return (<MovieItem value={{genre: "Fantasy", name: movie?.title, text: movie?.original_language, imageSrc: `${BASE_URL_IMG}original${movie?.poster_path}` }} height={400} />)
          })}
          {/* <MovieItem value={obj} height={400} />
          <MovieItem value={obj} height={400} />
          <MovieItem value={obj} height={400} />
          <MovieItem value={obj} height={400} />
          <MovieItem value={obj} height={400} />
          <MovieItem value={obj} height={400} />
          <MovieItem value={obj} height={400} />
          <MovieItem value={obj} height={400} />
          <MovieItem value={obj} height={400} /> */}
          {/* <div style={{ margin: '5px' }}>
          <MovieItem value={obj} height={400} />
        </div>
        <div style={{ margin: '5px' }}>
          <MovieItem value={obj} height={400} />
        </div>
        <div style={{ margin: '5px' }}>
          <MovieItem value={obj} height={400} />
        </div>
        <div style={{ margin: '5px' }}>
          <MovieItem value={obj} height={400} />
        </div>
        <div style={{ margin: '5px' }}>
          <MovieItem value={obj} height={400} />
        </div> */}
        </Slider>
      </div>
      <CustomTitle>Featured TV shows ▷</CustomTitle>
    </>
    // </CustomContainer>
  );
};

export default memo(MoviesContainer);
