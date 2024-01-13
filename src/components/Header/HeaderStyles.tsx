import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const PageHeader = styled.header`
  height: 100%;
  width: 5%;
  position: fixed;
  z-index: 10;
  background-color: ${(props) => props.theme.colors.background};
`;
  
export const Image = styled.img`
  max-width: 100%;
`;

export const CustomContainer = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  // justify-content: center;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-top: 30px;
`;

export const CustomNavLink = styled(NavLink)`
  // color: ${(props) => props.theme.colors.white};
  // cursor: 'pointer',
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
  :hover {
    animation: bounce 1s;
  }
`;

export const navLinkStyle = {
    cursor: 'pointer',
};
export const activeNavLinkStyle = {
  // fontStyle: 'italic',
  // cursor: 'default',
  // opacity: '0.4',
};
