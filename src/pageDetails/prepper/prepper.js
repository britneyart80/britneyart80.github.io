import PageDetail from "../pageDetail";
import styles from "./prepper.module.scss";

export default new PageDetail(
    "Prepper",
    new Date(2019, 7),
    new Date(2019, 7),
    "experiences/prepper.gif",
    (<div className={styles.content}>
        <h5 className={styles.stack}> ReactJS, Sass, Express/MongoDB, UI/UX Design</h5>
    </div>)
);