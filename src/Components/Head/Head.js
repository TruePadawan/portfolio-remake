import Card from '../Card/Card';
import styles from './Head.module.css';

export default function Head(props)
{
    return (
        <button className={styles["head-button"]}>
            <Card className={styles["head"]} >

                <Card className={styles["title"]} onClicked={props.clickHandler}>
                    <span className={styles["title-name"]}>Hermes</span>
                    <span className={styles["title-role"]}>Junior Dev</span>
                    <span>Click to View More</span>
                </Card>

            </Card>
        </button>
    );
}