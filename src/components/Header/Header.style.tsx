import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const PageHeader = styled.header`
  height: 100%;
  width: 5%;
  position: fixed;
  z-index: 10;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const CustomContainer = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  margin-top: 30px;
`;

export const CustomAvatarButton = styled(Button)`
  cursor: pointer;
  :hover {
    div {
      box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.8);
    }
    img {
      filter: brightness(1.2);
    }
  }
`;

export const CustomNavLink = styled(NavLink)`
  @keyframes bounce {
    0%,
    20%,
    60%,
    100% {
      transform: translateY(0);
      transform: translateY(0);
    }
    35% {
      transform: translateY(-4px);
      transform: translateY(-4px);
    }
    80% {
      transform: translateY(-3px);
      transform: translateY(-3px);
    }
  }
  button svg {
    font-size: 40px;
    color: #ffffff;
  }
  :hover {
    animation: bounce 1s;
  }
  :hover button svg {
    color: ${(props) => props.theme.colors.orange};
    transition: 1s;
  }
  &.active {
    cursor: default;
    opacity: 0.4;
    animation: none;
    :hover button svg {
      color: ${(props) => props.theme.colors.white};
    }
  }
`;
