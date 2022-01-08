import React from 'react';
import Card from '../../Card/Card';
import styles from './Contact.module.css';

export default function Contact()
{
    return (
        <Card className={styles["contacts-card"]}>

            <span>Contact</span>
            
            <div className={styles["contacts"]}>
                <a href="https://github.com/TruePadawan" target="_blank" rel="noreferrer">
                    <Card className={styles["contacts-link-card"]}>
                        <img src="https://img.icons8.com/windows/64/000000/github.png" alt="GitHub PNG"/>
                    </Card>
                </a>

                <a href="https://twitter.com/TheTruePadawan" target="_blank" rel="noreferrer">
                    <Card className={styles["contacts-link-card"]}>
                        <img src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="Twitter PNG"/>
                    </Card>
                </a>

                <a href="mailto:hermeschigoziri@gmail.com" target="_blank" rel="noreferrer">
                    <Card className={styles["contacts-link-card"]}>
                        <img src="https://img.icons8.com/fluency/48/000000/mail.png" alt="Mail PNG"/>
                    </Card>
                </a>

                <a href="https://www.linkedin.com/in/hermes-chigoziri-919148204/" target="_blank" rel="noreferrer">
                    <Card className={styles["contacts-link-card"]}>
                        <img src="https://img.icons8.com/color/50/000000/linkedin.png" alt="LinkedIn PNG"/>
                    </Card>
                </a>
            </div>

        </Card>
    );
}