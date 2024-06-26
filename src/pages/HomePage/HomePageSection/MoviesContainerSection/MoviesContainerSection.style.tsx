import { FC } from "react";
import styled from "styled-components";

// export const CustomContainer = styled.div`
// export const CustomContainer = styled(Slider)`
//   margin-top: 25px;
//   display: grid;
//   gap: 15px;
//   height: 440px;
//   grid-template-columns: repeat(5, auto);
// `;

export const CustomTitle = styled.h2`
  margin: 50px 25px 20px;
  color: ${(props) => props.theme.colors.white};
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  // @media ${(props) => props.theme.media.tablet} {
  // }
  // @media ${(props) => props.theme.media.phone} {
  // }
`;

interface ArrowProps {
  className?: string;
  style?: object;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const NextArrow: FC<ArrowProps> = ({ className, style, onClick }) => {
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

export const PrevArrow: FC<ArrowProps> = ({ className, style, onClick }) => {
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
