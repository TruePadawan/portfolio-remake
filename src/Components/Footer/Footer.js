import React from 'react';
import Card from '../Card/Card';

import styles from './Footer.module.css';

export default function Footer()
{
    return (
        <Card className={styles["footer"]}>
            <Card className={`${styles["link"]} ${styles["link-title"]}`}>
                <span>Icons by Icons8</span>
            </Card>
            <Card className={styles["link"]}>
                <a href="https://icons8.com/icon/AZOZNnY73haj/github">GitHub icon</a>
            </Card>
            <Card className={styles["link"]}>
                <a href="https://icons8.com/icon/13963/twitter">Twitter icon</a>
            </Card>
            <Card className={styles["link"]}>
                <a href="https://icons8.com/icon/Sf2NuZRCVuaE/dev">Dev icon</a>
            </Card>
            <Card className={styles["link"]}>
                <a href="https://icons8.com/icon/13930/linkedin">LinkedIn icon</a>
            </Card>
        </Card>
    );
}


{/* <a href="https://icons8.com/icon/6VwxladcAlxL/notepad">Notepad icon by Icons8</a>

<img src="https://img.icons8.com/dusk/64/000000/news.png"/>

<img src="https://img.icons8.com/cotton/64/000000/mushroom.png"/> */}