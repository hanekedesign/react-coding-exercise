import { FC } from "react";

interface DetailsProps {}

const Details: FC<DetailsProps> = () => {
  return (
    <div className="app-container">
      <div className="app-container__content app-container__content--details"></div>
    </div>
  );
};

export default Details;
