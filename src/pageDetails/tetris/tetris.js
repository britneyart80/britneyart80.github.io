import PageDetail from "../pageDetail";
import styles from "./tetris.module.scss";

export default new PageDetail(
    "Tetris",
    new Date(2020, 2),
    new Date(2020, 4),
    "experiences/tetris.gif",
    (<div className={styles.content}>
        <h5 className={styles.stack}> Python, Pygame </h5>
    </div>)
);