import React from 'react';
import Carousel from 'react-material-ui-carousel';
import HeaderCarouselItems from '../HeaderCarouselItem/HeaderCarouselItem';
import imgGodzilla from '../../../../assets/images/carousel/01_godzilla.png';
import imgWonderWoman from '../../../../assets/images/carousel/02_wonder-woman.png';
import imgSuperheroes from '../../../../assets/images/carousel/03_superheroes.png';

const HeaderCarousel: React.FC = () => {
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
      duration={1500}
      navButtonsAlwaysVisible
      indicators={false}
      navButtonsProps={{
        style: {
          background: 'none',
        },
      }}
    >
      {carouselItems.map((item, i) => (
        <HeaderCarouselItems key={i} value={item} />
      ))}
    </Carousel>
  );
};

export default React.memo(HeaderCarousel);
