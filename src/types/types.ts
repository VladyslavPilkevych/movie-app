export interface ITheme {
  colors: {
    white: string;
    black: string;
    background: string;
    creamWhite: string;
    lightBlue: string;
    hoverDarkBlue: string;
  };
  media: {
    phone: string;
    tablet: string;
    notLaptop: string;
  };
}

export interface IHeaderCarouselItems {
  genre: string;
  name: string;
  text: string;
  imageSrc: string;
}
