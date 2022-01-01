import React, { useReducer } from 'react';
import Head from './Head/Head';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Card from './Card/Card';
import Modal from './Modal/Modal';

import styles from './ui.module.css';

const AboutMe = {
    title: "About Me",
    message: <p>I'm Hermes, an entry-level developer. I work with C++ and Qt to build GUI applications, I also work with web technologies
    to build simple websites. I'm working towards mobile development with React-Native but at the moment working on my web-dev skills.</p>
}

const IconLinks = {
    title: "Icon Links by Icons8",
    links: (
        <Card className={styles["footer-links"]}>
            <Card className={styles["footer-link"]}>
                <a href="https://icons8.com/icon/AZOZNnY73haj/github">GitHub icon</a>
            </Card>

            <Card className={styles["footer-link"]}>
                <a href="https://icons8.com/icon/13963/twitter">Twitter icon</a>
            </Card>

            <Card className={styles["footer-link"]}>
                <a href="https://icons8.com/icon/Sf2NuZRCVuaE/dev">Dev icon</a>
            </Card>

            <Card className={styles["footer-link"]}>
                <a href="https://icons8.com/icon/13930/linkedin">LinkedIn icon</a>
            </Card>

            <Card className={styles["footer-link"]}>
                <a href="https://icons8.com/icon/6VwxladcAlxL/notepad">Notepad icon</a>
            </Card>

            <Card className={styles["footer-link"]}>
                <a href="https://icons8.com/icon/42835/news">News icon</a>
            </Card>
            
            <Card className={`${styles["footer-link"]} ${styles["last-footer-link"]}`}>
                <a href="https://icons8.com/icon/65023/mushroom">Mushroom icon</a>
            </Card>
        </Card>
    )
};

const modalStateReducer = (currentState, action) => {
    if (action.type === "UPDATE_HEAD_CLICK_STATE")
    {
        return { headClicked: !currentState.headClicked, footerClicked: currentState.footerClicked };
    }
    else if (action.type === "UPDATE_FOOTER_CLICK_STATE")
    {
        return { headClicked: currentState.headClicked, footerClicked: !currentState.footerClicked };
    }
};

const UI = () => {
    const [modalState, modalStateDispatcher] = useReducer(modalStateReducer, {
        headClicked: false,
        footerClicked: false
    });

    const headClickHandler = () => {
        modalStateDispatcher({ type: "UPDATE_HEAD_CLICK_STATE" });
    }

    const footerClickHandler = () => {
        modalStateDispatcher({ type: "UPDATE_FOOTER_CLICK_STATE" });
    }

    return (
        <>
            { modalState.headClicked && <Modal title={AboutMe.title} message={AboutMe.message} exitModal={headClickHandler}/> }
            { modalState.footerClicked && <Modal title={IconLinks.title} message={IconLinks.links} exitModal={footerClickHandler}/> }
            <div className={styles["ui"]}>
                <Head clickHandler={headClickHandler}/>
                <Main />
                <Footer clickHandler={footerClickHandler}/>
            </div>
        </>
    );
};

export default UI;