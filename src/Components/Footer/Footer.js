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
};