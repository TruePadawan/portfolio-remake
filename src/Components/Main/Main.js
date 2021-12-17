import React from 'react';
import Card from '../Card/Card';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';

import styles from './Main.module.css';

export default function Main()
{
    return (
        <Card className={styles["container"]}>
            <div className={styles["tech-stack"]}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-line.svg" alt="cPlusPlus svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg" alt="Qt svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React svg" />
            </div>

            <div className={styles["contact-and-project"]}>
                <Contact />
                <Projects />
            </div>

            <div className={styles["tech-stack"]}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5 svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3 svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript svg" />
            </div>
        </Card>
    )
}