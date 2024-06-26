import { FC } from "react";

interface ArrowProps {
  className?: string;
  style?: object;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const NextArrow: FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      role="button"
      tabIndex={0}
      style={{
        ...style,
        right: '0',
        zIndex: '10',
        padding: '15px 5px 0 0',
      }}
      onClick={onClick}
    />
  );
};

export const PrevArrow: FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      role="button"
      tabIndex={0}
      style={{
        ...style,
        left: '0',
        zIndex: '10',
        paddingTop: '15px 0 0 5px',
      }}
      onClick={onClick}
    />
  );
};
