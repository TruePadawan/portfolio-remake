import Card from '../Card/Card';
import styles from './Head.module.css';

export default function Head(props)
{
    return (
      <Card
        className={`${
          props.clicked === false ? styles["head-anim"] : styles["head-no-anim"]
        }`}
      >
        <div className={styles["threads"]}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <Card className={styles["title"]} onClicked={props.clickHandler}>
          <span className={styles["title-name"]}>Hermes</span>
          <span className={styles["title-role"]}>Junior Dev</span>
        </Card>

        <div className={styles["threads"]}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Card>
    );
}