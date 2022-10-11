import React, { FC, memo } from 'react';
import Carousel from 'react-material-ui-carousel';
import HeaderCarouselItems from '../HeaderCarouselItems/HeaderCarouselItems';
import imgGodzilla from '../../assets/images/carousel/01_godzilla.png';
import imgWonderWoman from '../../assets/images/carousel/02_wonder-woman.png';
import imgSuperheroes from '../../assets/images/carousel/03_superheroes.png';
import styled from 'styled-components';

// const CustomContainer = styled.div`
//   background-repeat: no-repeat;
//   background-attachment: fixed;
//   background-position: center;
//   background-size: cover;
//   height: 550px;
//   @media ${(props) => props.theme.media.tablet} {
//     height: 350px;
//   }
//   @media ${(props) => props.theme.media.phone} {
//     height: 150px;
//   }
// `;

// const CustomDarkBg = styled.div`
//   width: 100%;
//   height: 100%;
//   padding: 10%;
//   background: linear-gradient(
//     269.96deg,
//     rgba(29, 29, 29, 0) 0.04%,
//     rgba(29, 29, 29, 0.8) 99.5%
//   );
//   @media ${(props) => props.theme.media.phone} {
//     padding: 5%;
//   }
// `;
// const CustomMovieGenre = styled.div`
//   background-color: hsla(0, 50%, 0%, 0.5);
//   border-radius: 0 10px;
//   padding: 5px;
//   display: inline-block;
//   font-family: 'Roboto', sans-serif;
//   color: ${(props) => props.theme.colors.lightBlue};
// `;
// const CustomMovieName = styled.h2`
//   color: ${(props) => props.theme.colors.white};
//   font-family: 'Roboto', sans-serif;
//   font-weight: 500;
//   font-size: 56px;
//   margin-top: 30px;
//   @media ${(props) => props.theme.media.tablet} {
//     font-size: 36px;
//     margin-top: 20px;
//   }
//   @media ${(props) => props.theme.media.phone} {
//     font-size: 20px;
//     margin-top: 12px;
//   }
// `;
// const CustomMovieText = styled.h5`
//   color: ${(props) => props.theme.colors.white};
//   font-family: 'Roboto', sans-serif;
//   font-weight: 400;
//   max-width: 60%;
//   font-size: 16px;
//   margin-top: 20px;
//   @media ${(props) => props.theme.media.tablet} {
//     font-size: 14px;
//     margin-top: 15px;
//   }
//   @media ${(props) => props.theme.media.phone} {
//     max-width: 80%;
//     font-size: 14px;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//   }
// `;

const HeaderCarousel: FC = () => {
  const carouselItems = [
    {
      genre: 'Science Fiction',
      name: 'Godzilla vs. Kong',
      text: 'In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.',
      imageSrc: imgGodzilla,
    },
    {
      genre: 'Fantasy',
      name: 'Wonder Woman 1984',
      text: 'A botched store robbery places Wonder Woman in a global battle against a powerful and mysterious ancient force that puts her powers in jeopardy.',
      imageSrc: imgWonderWoman,
    },
    {
      genre: 'Fantasy',
      name: "Zack Snyder's Justice League",
      text: "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
      imageSrc: imgSuperheroes,
    },
  ];
  return (
    <Carousel
      //   animation="slide"
      duration={1500}
      navButtonsAlwaysVisible
      indicators={false}
      //   indicatorContainerProps={{
      //     style: {
      //   marginTop: '-20px',
      //     },
      //   }}
      navButtonsProps={{
        style: {
          background: 'none',
        },
      }}
    >
      {carouselItems.map((item, i) => (
        <HeaderCarouselItems key={i} value={item} />
        // <CustomContainer
        //   key={i}
        //   style={{ backgroundImage: `url(${item.imageSrc})` }}
        // >
        //   <CustomDarkBg>
        //     <CustomMovieGenre>{item.genre}</CustomMovieGenre>
        //     <CustomMovieName>{item.name}</CustomMovieName>
        //     <CustomMovieText>{item.text}</CustomMovieText>
        //   </CustomDarkBg>
        // </CustomContainer>
      ))}
    </Carousel>
  );
};

export default memo(HeaderCarousel);
