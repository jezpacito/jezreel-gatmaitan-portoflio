import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    // { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "Laravel Framework", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 70 },
    { skill: "PHP", ratingPercentage: 70 },
    { skill: "Eloquent ORM", ratingPercentage: 85 },
    { skill: "HTML", ratingPercentage: 80 },

    { skill: "REST API", ratingPercentage: 90 },
    { skill: "MySql", ratingPercentage: 70 },
    { skill: "CSS", ratingPercentage: 65 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "Present" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "DTI Region 12 Online platform",
      duration: { fromDate: "Sept 2020", toDate: "Mar 2021" },
      description:
        "An  Online platform where citizens all over Region 12 Philippines can access the services of the Department of Trade and Industry (DTI) such as sales promotion and others. " +
        " https://r12services.dti.gov.ph/",
      subHeading: "Technologies Used: React JS, Laravel, Ant Design",
    },
    {
      title: "Legnacare Web App",
      duration: { fromDate: "Dec 2020", toDate: "Feb 2021" },
      description:
        "Legna Care staff managment system that manages the hiring process for home care nursing",
      subHeading: "Technologies Used: Laravel, React Js, Ant Design",
    },
    {
      title: "Clientwise Web App",
      duration: { fromDate: "2022", toDate: "Present" },
      description:
        "Developed a clientwise smart tool web application that manages the process of annulment cases with subscription management. ",
      subHeading:
        "Technologies Used:  React JS, Laravel , Material UI, Metronic",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Holy Trinity College, General Santos City"}
        subHeading={"BACHELOR OF SCIENCE INFORMATION TECHNOLOGY"}
        fromDate={"2016"}
        toDate={"2020"}
      />

      <ResumeHeading
        heading={"Technical Education And Skills Development Authority"}
        subHeading={"COMPUTER SYSTEM SERVICING (CSS NCII)"}
        fromDate={"Aug"}
        toDate={"Sep 2019"}
      />
      <ResumeHeading
        heading={"High School"}
        subHeading={"ESPERANZA NATIONAL HIGH SCHOOL"}
        fromDate={"2014"}
        toDate={"2015"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"CODEVIDIA"}
          subHeading={"FULLSTACK DEVELOPER"}
          fromDate={"March 2021"}
          toDate={"present"}
        />
        <br />
        <ResumeHeading
          heading={"XIKLAB DIGITAL"}
          subHeading={"LARAVEL BACKEND DEVELOPER"}
          fromDate={"March 2022"}
          toDate={"present"}
        />
        <br />

        <ResumeHeading
          heading={"BOXTYPD TECHNOLOGY "}
          subHeading={"JUNIOR WEB DEVELOPER"}
          fromDate={"2020"}
          toDate={"2021"}
        />

        <div className="experience-description">
          <span className="resume-description-text">
            - Create API endpoints and backend unit testing using Laravel.
          </span>
          <br />
          <span className="resume-description-text">
            - Implement third party APIs
          </span>
          <br />
          <span className="resume-description-text">
            - Create Frontend Design and functionalities using Reactjs.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        {/** <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
        /> */}

        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container " id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              {/**<div className="bullets">{getBullets()}</div> */}
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
