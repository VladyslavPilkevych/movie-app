import React, { FC, memo } from 'react';
import Slider from 'react-slick';
import MovieItem from '../MovieItem/MovieItem';
import imgWonderWoman from '../../assets/images/itemImg.png';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// const CustomContainer = styled.div`
// const CustomContainer = styled(Slider)`
//   margin-top: 25px;
//   display: grid;
//   gap: 15px;
//   height: 440px;
//   grid-template-columns: repeat(5, auto);
// `;

interface ArrowProps {
  className?: string;
  style?: object;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NextArrow: FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      role="button"
      tabIndex={0}
      style={{
        ...style,
        right: '0',
        zIndex: '10',
        // display: 'block',
        // width: '20px',
        // height: '32px',
        padding: '15px 5px 0 0',
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow: FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      role="button"
      tabIndex={0}
      style={{
        ...style,
        left: '0',
        zIndex: '10',
        // opacity: '0.5',
        // display: 'block',
        // borderRadius: '0px 30px 30px 0px',
        // background: '#252931',
        // width: '32px',
        // height: '32px',
        paddingTop: '15px 0 0 5px',
      }}
      onClick={onClick}
    />
  );
};
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
  return (
    // <CustomContainer>
    <div style={{ width: '100%', margin: '15px auto' }}>
      <Slider {...settings}>
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
        </div>
        <div style={{ margin: '5px' }}>
          <MovieItem value={obj} height={400} />
        </div>
      </Slider>
    </div>
    // </CustomContainer>
  );
};

export default memo(MoviesContainer);
