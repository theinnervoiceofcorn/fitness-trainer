import React, { ReactNode } from "react";

interface IButton {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  buttonText?: string | ReactNode;
}

export const Button: React.FC<IButton> = (props) => {
  const { className, onClick, buttonText } = props;

  return (
    <button className={className} onClick={onClick}>
      {buttonText}
    </button>
  );
};
