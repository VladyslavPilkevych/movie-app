import styled from "styled-components";


export const CustomDivMoreInfo = styled.div`
  width: 100%;
  height: 100%;
  // display: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  opacity: 0;
  transition: 0.5s;
  color: ${(props) => props.theme.colors.white};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const CustomDarkBg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  // padding: 5%;
  // position: relative;
  background: linear-gradient(
    180deg,
    rgba(29, 29, 29, 0) 0%,
    rgba(29, 29, 29, 0.1) 10.79%
  );
  transition: 0.3s;
`;

export const CustomContainer = styled.div`
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  margin: 5px;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    transform: scale(1.1);
  }
  // background-position: center;
  // @media ${(props) => props.theme.media.tablet} {
  //   height: 350px;
  // }
  // @media ${(props) => props.theme.media.phone} {
  //   height: 150px;
  // }
  &:hover ${CustomDivMoreInfo} {
    // display: flex;
    opacity: 1;
  }
  &:hover ${CustomDarkBg} {
    background: linear-gradient(
      180deg,
      rgba(29, 29, 29, 0.6) 15%,
      rgba(29, 29, 29, 0.9) 95.79%
    );
  }
`;

export const CustomMovieGenre = styled.div`
  background-color: hsla(0, 50%, 0%, 0.3);
  border-radius: 0 10px;
  padding: 5px;
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme.colors.lightBlue};
`;
export const CustomIcon = styled.button`
  background: transparent;
  border: none !important;
  position: absolute; 
  top: 10px;
  right: 10px; 
  padding: 3px 3px 0 3px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  color: ${(props) => props.theme.colors.white};
  :hover {
    background-color: hsla(0, 50%, 0%, 0.3);
    scale: 1.2;
  }
`;
export const CustomMovieName = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 30px;
  margin-top: 15px;
  max-height: 60px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  @media ${(props) => props.theme.media.tablet} {
    font-size: 26px;
    margin-top: 12px;
  }
  @media ${(props) => props.theme.media.phone} {
    font-size: 22px;
    margin-top: 10px;
  }
  :hover {
    text-decoration: underline;
  }
`;
