import { useState } from 'react';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';
import styles from './Head.module.css';

const AboutMe = {
    title: "About Me",
    message: `I'm Hermes, an entry-level developer. I work with C++ and Qt to build GUI applications, I also work with web technologies
    to build simple websites. I'm working towards mobile development with React-Native but at the moment working on my web-dev skills.`
}
export default function Head()
{
    const [clicked, setClicked] = useState(false);

    const clickHandler = () => {
        setClicked((current) => {
            return !current;
        });
    }
    return (
        <>
            { clicked && <Modal title={AboutMe.title} message={AboutMe.message} exitModal={clickHandler}/> }
            <Card className={`${clicked === false ? styles["head-anim"] : styles["head-no-anim"]}`}>

                <div className={styles["threads"]}><span></span><span></span><span></span><span></span></div>
                
                <Card className={styles["title"]} onClicked={clickHandler}>
                    <span className={styles["title-name"]}>Hermes</span>
                    <span className={styles["title-role"]}>Junior Dev</span>
                </Card>
                
                <div className={styles["threads"]}><span></span><span></span><span></span><span></span></div>

            </Card>
        </>
    )
}