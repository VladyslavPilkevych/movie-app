import styled from 'styled-components';

export const CustomMainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
`;

export const CustomContentBox = styled.div`
  display: flex;
  align-items: flex-start;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
`;

export const BackgroundImage = styled.div<{ bgImgPath: string }>`
  background-image: url(${(props) => props.bgImgPath});
  background-size: cover;
  background-position: center;
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DarkOverlay = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9));
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MovieInfoContainer = styled.div`
  flex: 1;
  padding-right: 20px;
  color: white;
`;

export const MovieTitle = styled.h1`
  margin: 0;
  font-size: 3em;
`;

export const AgeRating = styled.div`
  font-size: 1.2em;
  margin: 10px 0;
`;

export const MovieDescription = styled.p`
  font-size: 1.2em;
  line-height: 1.5;
`;

export const MoviePoster = styled.div`
  img {
    width: 200px;
    height: auto;
    border-radius: 10px;
    transition: transform 0.3s;
    border: 3px solid white;
    transition: 3s;
  }

  img:hover {
    transform: scale(1.3);
  }
`;
