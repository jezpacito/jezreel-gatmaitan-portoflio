import React from "react";
import ScrollService from "../../utilities/ScrollService";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreeb !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONST = {
    description:
      "I am a Laravel Developer with over a year of experience utilizing the Laravel Framework for web development. I also have knowledge and skills working with APIs and PHPUnit testing in Laravel, and also the foundations of utilizing React js as my front-end JavaScript library for developing user interfaces. And have prior experience with git version control (Github, GitLab, bitbucket).",
    highlights: {
      bullets: [
        "Laravel Framework ",
        "Laravel object relational mapper (ORM) ",
        "Building REST API",
        "React JavaScript library for building user interfaces",
      ],
      heading: "Here are a few Highlights:",
    },
  };

  const renderHighlights = () => {
    return SCREEN_CONST.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };
  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONST.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONST.highlights.heading}</span>
              </div>

              {renderHighlights()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn">
                {""}
                Hire Me{""}
              </button>
              <a href="resume.pdf" download="JezreelGatmaitan-Resume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
