import PageDetail from "../pageDetail";
import styles from "./beyond-the-curve.module.scss";

export default new PageDetail(
    "Beyond the curve",
    new Date(2020, 7),
    new Date(2020, 8),
    "experiences/btc.gif",
    (<div className={styles.content}>
        <div className={styles.stack}> ReactJS, Bootstrap, UI/UX Design</div>
    </div>)
);