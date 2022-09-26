import React from "react";
import Button from "../../atoms/Button/Button";
import phone_1 from "../../../Public/phone1.png";
import phone_2 from "../../../Public/phone2.png";
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__top">
        <span className="banner__title">Food app</span>
        <p className="banner__h2">
          Why stay hungry when you can order form Bella Onojie
        </p>
        <p className="banner__h4">
          Download the bella onoje’s food app now on{" "}
        </p>

        <div className="banner__groupBtn">
          <Button
            outline={false}
            fontSize={24}
            content="Playstore"
            radious={30}
          />
          <Button
            outline={true}
            fontSize={24}
            content="App store"
            radious={30}
          />
        </div>
      </div>
      <div className="banner__img">
        <img src={phone_1}></img>
        <img src={phone_2}></img>
      </div>
      <div className="banner__bottom">
        <div className="banner__bottom__line"></div>
        <div className="banner__bottom__text">How the app works</div>
      </div>
    </div>
  );
};

export default Banner;
