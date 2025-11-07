import React from "react";
import "./AppDownload.css";
import assets from "../../assets/assets";

const AppDownload = () => {
  return (
    <section className="download" id="app-download">
      <p className="download__title">
        For a better experience,<br />download the Deliva App
      </p>

      <div className="download__stores">
        <img
          src={assets.play_store}
          alt="Download on Google Play"
          className="download__store-badge"
        />
        <img
          src={assets.app_store}
          alt="Download on the App Store"
          className="download__store-badge"
        />
      </div>
    </section>
  );
};

export default AppDownload;
