import React from "react";
import SolutionStep from "./SolutionStep";
import "./aboutus.css";

function About() {
  return (
    <div className="about-section" id="Aboutus">
      <div className="about-image-content">
        <img src="assests/3.svg" alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repellat, sed nisi in at quod vero magnam aspernatur cupiditate aliquid sint hic a odit ut, cum repellendus veniam! Architecto, fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque provident non iure quibusdam voluptatibus, impedit vitae illo illum nisi at necessitatibus aliquid, eveniet totam unde, officia error eaque quia architecto.
        </p>

        <h4 className="about-text-title">Features</h4>

        <SolutionStep
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repellat, sed nisi in at quod vero magnam aspernatur c"
        />

        <SolutionStep
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repellat, sed nisi in at quod vero magnam aspernatur c"
        />

        <SolutionStep
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repellat, sed nisi in at quod vero magnam aspernatur c"
        />
      </div>
    </div>
  );
}

export default About;
