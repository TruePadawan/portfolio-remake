import React from 'react';
import Card from '../../Card/Card';
import styles from './Contact.module.css';

export default function Contact()
{
    return (
        <Card className={styles["contacts-card"]}>

            <span>Contact</span>
            <div className={styles["contacts"]}>
                <Card className={styles["contacts-link"]}>
                    <a href="https://github.com/TruePadawan" target="_blank" rel="noreferrer">
                        <img src={require("./resources/github.png")} alt="GitHub PNG" />
                    </a>
                </Card>

                <Card className={styles["contacts-link"]}>
                    <a href="https://twitter.com/TheTruePadawan" target="_blank" rel="noreferrer">
                        <img src={require("./resources/twitter.png")} alt="Twitter PNG" />
                    </a>
                </Card>

                <Card className={styles["contacts-link"]}>
                    <a href="https://dev.to/TruePadawan" target="_blank" rel="noreferrer">
                        <img src={require("./resources/dev.png")} alt="DevTo PNG" />
                    </a>
                </Card>

                <Card className={styles["contacts-link"]}>
                    <a href="https://www.linkedin.com/in/hermes-chigoziri-919148204/" target="_blank" rel="noreferrer">
                        <img src={require("./resources/linkedin.png")} alt="LinkedIn PNG" />
                    </a>
                </Card>
            </div>

        </Card>
    );
}