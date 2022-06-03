import PageDetail from "../pageDetail";
import styles from "./asics.module.scss";

export default new PageDetail(
    "Asics Digital",
    new Date(2020, 0),
    new Date(2020, 11),
    "experiences/asics.gif",
    (<div className={styles.content}>
        <h5 className={styles.stack}> JS, HTML/CSS, Salesforce</h5>
    </div>)
);