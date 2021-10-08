import { FC } from "react";
import "./styles.css";
import grey_dots from "./images/grey_dots.png";

type SpinnerProps = {
  isLoading: boolean;
  height?: string;
  img?: string;
};

const Spinner: FC<SpinnerProps> = ({ isLoading, height, img }) => {
  return (
    <>
      {isLoading && (
        <span
          style={{ height: `${height ?? "1rem"}` }}
          className={isLoading ? "animateSpin" : ""}
        >
          <img src={img ?? grey_dots} alt="" />
        </span>
      )}
    </>
  );
};

export default Spinner;
