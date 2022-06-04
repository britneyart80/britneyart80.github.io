import PageDetail from "../pageDetail";
import styles from "./tic-tac-toe.module.scss";

export default new PageDetail(
    "Tic Tac Toe",
    new Date(2019, 5),
    new Date(2019, 5),
    "experiences/ttt.gif",
    "JS, HTML/CSS, Bootstrap, UI/UX Design",
    (<div className={styles.content}>
        
    </div>)
);