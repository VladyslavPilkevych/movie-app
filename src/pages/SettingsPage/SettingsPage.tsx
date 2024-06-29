import React, { FC, memo } from 'react';
import TitleComponent from '../../components/TitleComponent';

const SettingsPage: FC = () => {
  return (
    <>
      <TitleComponent style={{fontSize: "36px"}}>{"Interface settings"}</TitleComponent>
    </>
  );
};

export default memo(SettingsPage);
