import React from "react";

export default function Ride() {
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
          <img src="app.png" alt="" id="app" />
        </a>
        <a href="#play">
          <img src="play.png" alt="" id="play" />
        </a>
      </div>
      <div className="bodyImages">
        <img src="ComponentTMP_4-image.jpg" className="triangle" alt="" />
        <img src="ComponentTMP_3-image.jpg" className="triangle" alt="" />
        <img src="ComponentTMP_2-image.jpg" className="triangle" alt="" />
      </div>
      <div className="space2"></div>
      <div className="space">
        <span> Earn extra money driving</span>
        <br />
        <h6>Set your own schedule, be your own boss</h6>
      </div>
      <div className='color'></div>
      <div className='ourOffer'>
        what we offer
      </div>
    </div>
  );
}
