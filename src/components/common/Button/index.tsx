import { FC } from "react";
import "./index.scss"

interface ButtonProps {}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <button className="button" {...props}>{children}</button>;
};

export default Button;
