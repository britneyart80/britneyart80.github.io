import PageDetail from "../pageDetail";
import styles from "./asics.module.scss";

export default new PageDetail(
    "Asics Digital",
    new Date(2020, 0),
    new Date(2020, 11),
    "experiences/asics.gif",
    "JS, HTML/CSS, Salesforce",
    (<div className={styles.content}>
    </div>)
);