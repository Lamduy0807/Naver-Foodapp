import React from "react";
import Button from "../../atoms/Button/Button";
const Download = () => {
  return (
    <div className="download">
      <span className="download__title">Download the app now.</span>
      <span className="download__desc">
        Most calendars are designed for teams.
      </span>
      <span className="download__desc--desktop">
        Available on your favorite store. Start your premium experience now
      </span>
      <div className="download__groupBtn download__groupBtn--mobile">
        <div style={{ flex: 0.45 }}>
          <Button outline={false} content="Buy now" radious={10} fontSize={16}/>
        </div>
        <div style={{ flex: 0.55 }}>
          <Button
            outline={true}
            color={"white"}
            content="Try for free"
            radious={10}
            fontSize={16}
          />
        </div>
      </div>
      <div className="download__groupBtn download__groupBtn--desktop">
        <div style={{ flex: 0.45 }}>
          <Button outline={false} content="Playstore" radious={10} fontSize={16}/>
        </div>
        <div style={{ flex: 0.55 }}>
          <Button
            outline={true}
            color={"white"}
            content="App store"
            radious={10}
            fontSize={16}
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
