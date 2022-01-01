import React from 'react';
import Card from '../Card/Card';

import styles from './Footer.module.css';

export default function Footer(props)
{
    return (
        <button className={styles["footer-button"]}>
            <Card onClicked={props.clickHandler} className={styles["footer"]}>
                <span>View Icon Links</span>
            </Card>
        </button>
    );
}


{/* <a href="https://icons8.com/icon/6VwxladcAlxL/notepad">Notepad icon by Icons8</a>

<img src="https://img.icons8.com/dusk/64/000000/news.png"/>

<img src="https://img.icons8.com/cotton/64/000000/mushroom.png"/> */}