import styled from "styled-components";

export const CustomContainer = styled.div`
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  height: 550px;
  @media ${(props) => props.theme.media.tablet} {
    height: 350px;
  }
  @media ${(props) => props.theme.media.phone} {
    height: 150px;
  }
`;

export const CustomDarkBg = styled.div`
  width: 100%;
  height: 100%;
  padding: 10%;
  background: linear-gradient(
    269.96deg,
    rgba(29, 29, 29, 0) 0.04%,
    rgba(29, 29, 29, 0.8) 99.5%
  );
  @media ${(props) => props.theme.media.phone} {
    padding: 5%;
  }
`;
export const CustomMovieGenre = styled.div`
  background-color: hsla(0, 50%, 0%, 0.5);
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
  font-size: 56px;
  margin-top: 15px;
  @media ${(props) => props.theme.media.tablet} {
    font-size: 36px;
    margin-top: 12px;
  }
  @media ${(props) => props.theme.media.phone} {
    font-size: 20px;
    margin-top: 10px;
  }
`;
export const CustomMovieText = styled.h5`
  color: ${(props) => props.theme.colors.white};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  max-width: 60%;
  font-size: 16px;
  margin-top: 20px;
  @media ${(props) => props.theme.media.tablet} {
    font-size: 14px;
    margin-top: 15px;
  }
  @media ${(props) => props.theme.media.phone} {
    max-width: 80%;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 5px;
  }
`;
export const CustomBtnGradient = styled.div`
  display: inline-block;
  background-image: linear-gradient(to right, #4b6cb7 0%, #182848  51%, #4b6cb7  100%);
  margin: 30px 10px;
  // padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;            
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;

  :hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;

export const CustomWatchNowBtn = styled.button`
  color: ${(props) => props.theme.colors.white};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  padding: 15px 35px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 10px;
  border: 3px solid transparent;
  background: rgba(44, 44, 44, 0.3);
  :hover {
    background: rgba(44, 44, 44, 0);
    text-decoration: underline;
  }
  @media ${(props) => props.theme.media.tablet} {
    font-size: 18px;
  }
  @media ${(props) => props.theme.media.phone} {
    font-size: 16px;
  }
`;