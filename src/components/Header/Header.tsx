import React, { FC, memo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import imgLogo from '../../assets/images/logo.png';
import { IconButton } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
// import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { CustomContainer, CustomNavLink, PageHeader, activeNavLinkStyle, navLinkStyle, Image } from './HeaderStyles';


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
