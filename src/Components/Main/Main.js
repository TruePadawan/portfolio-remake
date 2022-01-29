import React from "react";
import ReactTooltip from "react-tooltip";
import Card from "../Card/Card";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";

import styles from "./Main.module.css";

// COMPONENT FOR EACH TECH STACK ICON + A TOOLTIP
const TechStackItem = (props) => {
  return (
    <div>
      <img src={props.src} alt={props.alt} data-tip data-for={props.alt} />
      <ReactTooltip id={props.alt} type="light">
        <span>{props.tooltip}</span>
      </ReactTooltip>
    </div>
  );
};

export default function Main() {
  return (
    <Card className={styles["container"]}>
      <div className={styles["tech-stack"]}>
        <TechStackItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-line.svg" alt="C++ Icon" tooltip="C++"/>
        <TechStackItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg" alt="Qt Icon" tooltip="Qt"/>
        <TechStackItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Icon" tooltip="ReactJS"/>
      </div>

      <div className={styles["contact-and-project"]}>
        <Contact />
        <Projects />
      </div>

      <div className={styles["tech-stack"]}>
        <TechStackItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5 Icon" tooltip="HTML5"/>
        <TechStackItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3 Icon" tooltip="CSS3"/>
        <TechStackItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript Icon" tooltip="JavaScript"/>
      </div>
    </Card>
  );
}
