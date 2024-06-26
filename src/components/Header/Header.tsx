import React from 'react';
import { NavLink } from 'react-router-dom';
import imgLogo from '../../assets/images/logo.png';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import {
  CustomContainer,
  CustomNavLink,
  PageHeader,
  Image,
  CustomAvatarButton,
} from './Header.style';
import imgAvatar from '../../assets/images/ava.png';
import { ColorEnum } from '../../assets/styles';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClickAvatar = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseAvatar = () => {
    setAnchorEl(null);
  };
  return (
    <PageHeader>
      <NavLink to="/">
        <Image alt="logo" src={imgLogo} />
      </NavLink>
      <CustomContainer>
        <CustomNavLink to="/" end>
          <IconButton aria-label="HomeRoundedIcon">
            <HomeRoundedIcon />
          </IconButton>
        </CustomNavLink>
        <CustomNavLink to="/favorite">
          <IconButton aria-label="StarRoundedIcon">
            <StarRoundedIcon />
          </IconButton>
        </CustomNavLink>
        <CustomNavLink to="/account">
          <IconButton aria-label="PersonRoundedIcon">
            <PersonRoundedIcon />
          </IconButton>
        </CustomNavLink>
        <CustomNavLink to="/settings">
          <IconButton aria-label="SettingsRoundedIcon">
            <SettingsRoundedIcon />
          </IconButton>
        </CustomNavLink>
      </CustomContainer>
      <>
        <CustomAvatarButton
          id="avatar-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickAvatar}
        >
          <Avatar
            alt="User avatar"
            src={imgAvatar}
            sx={{ width: 50, height: 50 }}
          />
        </CustomAvatarButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseAvatar}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          sx={{backgroundColor: ColorEnum.GREY}}
        >
          <MenuItem onClick={handleCloseAvatar}>{'Profile'}</MenuItem>
          <MenuItem onClick={handleCloseAvatar}>{'My account'}</MenuItem>
          <MenuItem onClick={handleCloseAvatar}>{'Logout'}</MenuItem>
        </Menu>
      </>
    </PageHeader>
  );
};

export default React.memo(Header);
