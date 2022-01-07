import { FC } from "react";
import "./index.scss";

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ children, onClick, ...props }) => {
  return (
    <button onClick={onClick} className="button" {...props}>
      <span>{children}</span>
    </button>
  );
};

export default Button;