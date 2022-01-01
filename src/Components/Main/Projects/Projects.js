import React from 'react';
import Card from '../../Card/Card';
import styles from './Projects.module.css';

export default function Projects()
{
    return (
        <Card className={styles["projects-card"]}>

            <span>Projects</span>
            <div className={styles["projects"]}>
                    <a href="https://github.com/TruePadawan/GitHub-Info-Checker" target="_blank" rel="noreferrer">
                        <Card className={styles["projects-link-card"]}>
                            <img src={require("./resources/github.png")} alt="GitHub Info Checker" />
                        </Card>
                    </a>

                    <a href="https://github.com/TruePadawan/The-News-Project" target="_blank" rel="noreferrer">
                        <Card className={styles["projects-link-card"]}>
                            <img src={require("./resources/news.png")} alt="The News Project" />
                        </Card>
                    </a>

                    <a href="https://github.com/TruePadawan/Nipsie" target="_blank" rel="noreferrer">
                        <Card className={styles["projects-link-card"]}>
                            <img src={require("./resources/nipsie.png")} alt="Nipsie" />
                        </Card>
                    </a>

                    <a href="https://github.com/TruePadawan/Notepad--" target="_blank" rel="noreferrer">
                        <Card className={styles["projects-link-card"]}>
                            <img src={require("./resources/notepad.png")} alt="Notepad--" />
                        </Card>
                    </a>
            </div>
        </Card>
    );
}