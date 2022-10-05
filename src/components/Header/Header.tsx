import React, { FC, memo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import imgLogo from '../../assets/images/logo.jpg';
import { IconButton } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
// import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import styled from 'styled-components';

const PageHeader = styled.header`
  height: 100%;
  width: 5%;
  position: fixed;
  z-index: 10;
  background-color: ${(props) => props.theme.colors.black};
`;

const Image = styled.img`
  max-width: 100%;
`;

const CustomContainer = styled.div`
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

const CustomNavLink = styled(NavLink)`
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

const navLinkStyle = {
  cursor: 'pointer',
};
const activeNavLinkStyle = {
  // fontStyle: 'italic',
  // cursor: 'default',
  // opacity: '0.4',
};

const Header: FC = () => {
  const location = useLocation();
  return (
    <PageHeader>
      <NavLink to="/">
        <Image alt="logo" src={imgLogo} />
      </NavLink>
      <CustomContainer>
        <CustomNavLink
          style={location.pathname === '/' ? activeNavLinkStyle : navLinkStyle}
          to="/"
        >
          <IconButton aria-label="HomeRoundedIcon">
            <HomeRoundedIcon sx={{ fontSize: 40, color: '#ffffff' }} />
          </IconButton>
        </CustomNavLink>
        <CustomNavLink
          style={location.pathname === '/' ? activeNavLinkStyle : navLinkStyle}
          to="/favourite"
        >
          <IconButton aria-label="StarRoundedIcon">
            <StarRoundedIcon sx={{ fontSize: 40, color: '#ffffff' }} />
          </IconButton>
        </CustomNavLink>
        <CustomNavLink
          style={location.pathname === '/' ? activeNavLinkStyle : navLinkStyle}
          to="/account"
        >
          <IconButton aria-label="PersonRoundedIcon">
            <PersonRoundedIcon sx={{ fontSize: 40, color: '#ffffff' }} />
          </IconButton>
        </CustomNavLink>
        <CustomNavLink
          style={location.pathname === '/' ? activeNavLinkStyle : navLinkStyle}
          to="/settings"
        >
          <IconButton aria-label="SettingsRoundedIcon">
            <SettingsRoundedIcon sx={{ fontSize: 40, color: '#ffffff' }} />
          </IconButton>
        </CustomNavLink>
      </CustomContainer>
    </PageHeader>
  );
};

export default memo(Header);
