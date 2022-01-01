import { useState } from 'react';
import Card from '../Card/Card';
import styles from './Head.module.css';

export default function Head()
{
    const [clicked, setClicked] = useState(false);
    const clickHandler = () => {
        setClicked((current) => {
            console.log(clicked);
            return !current;
        });
    }
    return (
        <Card className={`${clicked === false ? styles["head-anim"] : styles["head-no-anim"]}`}>

            <div className={styles["threads"]}><span></span><span></span><span></span><span></span></div>
            
            <Card className={styles["title"]} onClicked={clickHandler}>
                <span className={styles["title-name"]}>Hermes</span>
                <span className={styles["title-role"]}>Junior Dev</span>
            </Card>
            
            <div className={styles["threads"]}><span></span><span></span><span></span><span></span></div>

        </Card>
    )
}