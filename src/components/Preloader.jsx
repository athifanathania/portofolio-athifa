import React from "react";
import { useEffect } from "react";
import { preLoaderAnim } from "../animations/index";
import "../preloader.css";

const Preloader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Athifa</span>
        <span>Nathania</span>
      </div>
    </div>
  );
};

export default Preloader;
