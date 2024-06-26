import React from 'react';
import Slider, { Settings as ISliderSettings } from 'react-slick';
import { NextArrow, PrevArrow } from './SliderComponent.style';
import { ISliderSectionStyles } from './types';
import { DistanceEnum } from '../../assets/styles';
import CardItem from '../CardItem/CardItem';
import { IBaseCardData } from '../CardItem/types';

interface SliderComponentProps {
  sliderItemsArray: IBaseCardData[];
  sliderSettings?: ISliderSettings;
  sectionStylesProps?: ISliderSectionStyles;
  cardsHeight?: number;
}

const SliderComponent: React.FC<SliderComponentProps> = (props) => {
  const { sliderItemsArray, sliderSettings, sectionStylesProps, cardsHeight } = props;
  const settings: ISliderSettings = React.useMemo(() => ({
    ...sliderSettings,
    centerMode: sliderSettings?.centerMode ?? false,
    infinite: sliderSettings?.infinite ?? false,
    swipeToSlide: sliderSettings?.swipeToSlide ?? true,
    slidesToShow: sliderSettings?.slidesToShow ?? 6,
    slidesToScroll: sliderSettings?.slidesToScroll ?? 1,
    slidesPerRow: sliderSettings?.slidesPerRow ?? 1,
    nextArrow: sliderSettings?.nextArrow ?? <NextArrow />,
    prevArrow: sliderSettings?.prevArrow ?? <PrevArrow />,
    // lazyLoad: , // todo
  }), [sliderSettings]);

  const sectionStyles: ISliderSectionStyles = {
    ...sectionStylesProps,
    width: sectionStylesProps?.width ?? DistanceEnum.PC10,
    margin: sectionStylesProps?.margin ?? DistanceEnum.AUTO,
  };

  return (
    <>
      <div style={sectionStyles}>
        <Slider {...settings}>
          {sliderItemsArray &&
            sliderItemsArray?.map((item: IBaseCardData) => (
              <CardItem cardInformation={item} height={cardsHeight ?? 500} key={item.id} />
            ))}
        </Slider>
      </div>
    </>
  );
};

export default React.memo(SliderComponent);
