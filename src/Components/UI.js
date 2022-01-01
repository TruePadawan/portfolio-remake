import React, { useState } from 'react';
import Head from './Head/Head';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Modal from './Modal/Modal';

import styles from './ui.module.css';

const AboutMe = {
    title: "About Me",
    message: <p>I'm Hermes, an entry-level developer. I work with C++ and Qt to build GUI applications, I also work with web technologies
    to build simple websites. I'm working towards mobile development with React-Native but at the moment working on my web-dev skills.</p>
}

const UI = () => {
    const [clicked, setClicked] = useState(false);

    const clickHandler = () => {
        setClicked((current) => {
            return !current;
        });
    }
    return (
        <>
            { clicked && <Modal title={AboutMe.title} message={AboutMe.message} exitModal={clickHandler}/> }
            <div className={styles["ui"]}>
                <Head clicked={clicked} clickHandler={clickHandler}/>
                <Main />
                <Footer />
            </div>
        </>
    );
};

export default UI;