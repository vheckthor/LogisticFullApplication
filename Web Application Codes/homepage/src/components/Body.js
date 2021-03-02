import React from "react";

export default function Body() {
  return (
    <div>
      <div className="bodyText">
        <h1>
          Swift, easy, <br />
          affordable rides <br />
          and deliveries
        </h1>
        <h3>Download App</h3>
        <a href="#app">

          <img src='app.png' alt=''/>
        </a>
        <a href="#play">
          <img src='play.png' alt=''/>
        </a>
      </div>
      <div className="bodyImages">
        <img src="ComponentTMP_4-image.jpg" className="triangle" alt="" />
        <img src="ComponentTMP_3-image.jpg" className="triangle" alt="" />
        <img src="ComponentTMP_2-image.jpg" className="triangle" alt="" />
      </div>
    </div>
  );
}
