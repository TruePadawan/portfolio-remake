import React, { useReducer } from 'react';
import Head from './Head/Head';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Card from './Card/Card';
import Modal from './Modal/Modal';

import styles from './ui.module.css';

const AboutMe = {
    title: (<p>About Me👋</p>),
    message: <p>I'm Hermes. I have experience building GUI applications with C++/Qt along with Web Technologies
    to build websites and I'm flexible enough to pick up and use a new technology efficiently.<br />
    I'm currently working on improving my skill in Web Technologies before diving into Mobile App Development.<br />
    I usually spend most of my time doing tech-related activities, reading fantasy books or gaming.</p>
}

const IconLinks = {
    title: (<p>Icon Links by <a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a></p>),
    links: (
        <Card className={styles["footer-links"]}>
            <Card className={styles["footer-link"]}>
                <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/16318/github">GitHub icon</a>
            </Card>

            <Card className={styles["footer-link"]}>
                <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/13963/twitter">Twitter icon</a>
            </Card>

            <Card className={styles["footer-link"]}>
                <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/OumT4lIcOllS/mail">Mail icon</a>
            </Card>

            <Card className={styles["footer-link"]}>
                <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/13930/linkedin">LinkedIn icon</a>
            </Card>

            <Card className={styles["footer-link"]}>
                <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/6VwxladcAlxL/notepad">Notepad icon</a>
            </Card>

            <Card className={styles["footer-link"]}>
                <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/42835/news">News icon</a>
            </Card>
            
            <Card className={styles["footer-link"]}>
                <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/65023/mushroom">Mushroom icon</a>
            </Card>

            <Card className={styles["footer-link"]}>
                <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/LoyAjcvVKv1K/portfolio">Portfolio icon</a>
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