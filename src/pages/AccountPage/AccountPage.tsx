import React, { FC, memo } from 'react';
import { CustomAccountContainer, CustomDarkBg } from './AccountPage.style';
import TitleComponent from '../../components/TitleComponent/TitleComponent';

const AccountPage: FC = () => {
  return (
    <>
      <CustomDarkBg />
      <CustomAccountContainer>
        <TitleComponent style={{fontSize: "36px"}}>{"Account settings"}</TitleComponent>
        
      </CustomAccountContainer>
    </>
  );
};

export default memo(AccountPage);
