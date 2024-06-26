import React from 'react';
import { CustomTitle } from './TitleComponent.style';
import { ColorEnum } from '../../assets/styles';

interface TitleComponentProps {
  children?: string;
  style?: React.CSSProperties;
}

const TitleComponent: React.FC<TitleComponentProps> = (props) => {
  const { children, style } = props;

  const styles: React.CSSProperties = React.useMemo(() => ({
    ...style,
    fontWeight: style?.fontWeight ?? 500,
    fontSize: style?.fontSize ?? "24px   ",
    color: ColorEnum.WHITE,
  }), [style]);

  return <CustomTitle style={styles}>{children}</CustomTitle>;
};

export default React.memo(TitleComponent);
