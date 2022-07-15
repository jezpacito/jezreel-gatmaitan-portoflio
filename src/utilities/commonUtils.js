import AboutMe from "../PorfolioContainer/AboutMe/AboutMe";
import ContactMe from "../PorfolioContainer/ContactMe/ContactMe";
import Testimonial from "../PorfolioContainer/Testimonial/Testimonial";
// import Resume from "../PorfolioContainer/Resume/Resume";
import Home from "./../PorfolioContainer/Home/Home";
// import ResumeComponent from "../PorfolioContainer/Resume1/ResumeComponent";
import Resume from "./../PorfolioContainer/Resume/Resume";

export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "About Me",
    component: AboutMe,
  },
  {
    screen_name: "Resume",
    component: Resume,
  },
  {
    screen_name: "References",
    component: Testimonial,
  },
  {
    screen_name: "Contact Me",
    component: ContactMe,
  },
];
export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;
  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }
  return -1;
};
