import { FC } from "react";
import "./styles.css";
import ball from "./images/ball.svg";

type BouncerProps = {
  isLoading: boolean;
  height?: string;
  img?: string;
};

const Bouncer: FC<BouncerProps> = ({ isLoading, height, img }) => {
  return (
    <>
      {isLoading && (
        <span className={isLoading ? "animateBounce" : ""}>
          <img
            style={{ height: `${height ?? "1rem"}` }}
            src={img ?? ball}
            alt=""
          />
        </span>
      )}
    </>
  );
};

export default Bouncer;
