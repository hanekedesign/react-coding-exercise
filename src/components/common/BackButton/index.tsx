import "./index.scss";
import btn from "./chevron-with-circle-right.svg";
import { FC } from "react";

interface BackButtonInterface {
  className?: string;
  onClick:React.MouseEventHandler<HTMLImageElement>
}
const BackButton:FC<BackButtonInterface> = ({ className, onClick }) => {
  return (
    <img
    onClick={onClick}
      className={className ? "back-button " + className : "back-button"}
      src={btn}
      alt="back"
    />
  );
};

export default BackButton;
