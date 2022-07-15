import React, { useState } from "react";
import {
  GET_SCREEN_INDEX,
  TOTAL_SCREENS,
} from "../../../utilities/commonUtils";
import ScrollService from "../../../utilities/ScrollService";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
export const Header = () => {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;
    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;
  };

  let currentScreenSubscription =
    ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen);

  // const getHeaderOptionsClass = (index) => {
  //   let classes = "header-options";

  //   if (index < TOTAL_SCREENS.length - 1) classes += "header-option-separator";

  //   if (selectedScreen === index) classes += "selected-header-option";

  //   return;
  // };

  const getHeaderOptions = () => {
    return TOTAL_SCREENS.map((screen, i) => (
      <div
        key={screen.screen_name}
        className={`banner large ${
          i < TOTAL_SCREENS.length - 1 ? "header-option-separator" : ""
        } ${selectedScreen === i ? "selected-header-option" : ""}`}
        onClick={() => switchScreen(i, screen)}
      >
        <span>{screen.screen_name}</span>
      </div>
    ));
  };

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedScreen(index);
    setShowHeaderOptions(false);
  };

  return (
    <div>
      <div
        className="header-container"
        onClick={() => setShowHeaderOptions(!showHeaderOptions)}
      >
        <div className="header-parent">
          <div
            className="header-hamburger"
            onClick={() => setShowHeaderOptions(!showHeaderOptions)}
          >
            <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
          </div>

          <div className="header-logo">
            <span>J{"</>"}ZREEL</span>
            {/*<img
              src={require("../../../assets/Home/jeslogo.png")}
              alt="trouble loading image .."
            />*/}
          </div>
          <div
            className={
              showHeaderOptions
                ? "header-options show-hamburger-options" // header-optons
                : "header-options"
            }
          >
            {getHeaderOptions()}
          </div>
        </div>
      </div>
    </div>
  );
};