import styled from "styled-components";

export const CustomContainer = styled.div`
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 3px;
  // background-position: center;
  // @media ${(props) => props.theme.media.tablet} {
  //   height: 350px;
  // }
  // @media ${(props) => props.theme.media.phone} {
  //   height: 150px;
  // }
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
    rgba(29, 29, 29, 0.8) 80.79%
  );
`;
export const CustomMovieGenre = styled.div`
  background-color: hsla(0, 50%, 0%, 0.3);
  border-radius: 0 10px;
  padding: 5px;
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme.colors.lightBlue};
`;
export const CustomMovieName = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 30px;
  margin-top: 15px;
  @media ${(props) => props.theme.media.tablet} {
    font-size: 26px;
    margin-top: 12px;
  }
  @media ${(props) => props.theme.media.phone} {
    font-size: 22px;
    margin-top: 10px;
  }
`;
