import React from 'react';
import Card from '../Card/Card';
import styles from './Head.module.css';

export default function Head()
{
    return (
        <Card className={styles["head"]}>

            <div className={styles["threads"]}><span></span><span></span><span></span><span></span></div>
            
            <Card className={styles["title"]}>
                <span className={styles["title-name"]}>Hermes</span>
                <span className={styles["title-role"]}>Junior Dev</span>
            </Card>
            
            <div className={styles["threads"]}><span></span><span></span><span></span><span></span></div>

        </Card>
    )
}