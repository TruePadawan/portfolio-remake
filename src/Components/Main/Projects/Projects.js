import React from 'react';
import Card from '../../Card/Card';
import styles from './Projects.module.css';

export default function Projects()
{
    return (
        <Card className={styles["projects-card"]}>

            <span>Projects</span>
            <div className={styles["projects"]}>
                <Card className={styles["projects-link"]}>
                    <a href="https://github.com/TruePadawan/GitHub-Info-Checker" target="_blank" rel="noreferrer">
                        <img src={require("./resources/github.png")} alt="GitHub Info Checker" />
                    </a>
                </Card>

                <Card className={styles["projects-link"]}>
                    <a href="https://github.com/TruePadawan/The-News-Project" target="_blank" rel="noreferrer">
                        <img src={require("./resources/news.png")} alt="The News Project" />
                    </a>
                </Card>

                <Card className={styles["projects-link"]}>
                    <a href="https://github.com/TruePadawan/Nipsie" target="_blank" rel="noreferrer">
                        <img src={require("./resources/nipsie.png")} alt="Nipsie" />
                    </a>
                </Card>

                <Card className={styles["projects-link"]}>
                    <a href="https://github.com/TruePadawan/Notepad--" target="_blank" rel="noreferrer">
                        <img src={require("./resources/notepad.png")} alt="Notepad--" />
                    </a>
                </Card>
            </div>
        </Card>
    );
}