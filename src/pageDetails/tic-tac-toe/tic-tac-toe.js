import PageDetail from "../pageDetail";
import styles from "./tic-tac-toe.module.scss";

export default new PageDetail(
    "Tic Tac Toe",
    new Date(2019, 5),
    new Date(2019, 5),
    "experiences/ttt.gif",
    (<div className={styles.content}>
        <h5 className={styles.stack}> JS, HTML/CSS, Bootstrap, UI/UX Design</h5>
    </div>)
);