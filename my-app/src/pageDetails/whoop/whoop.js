import PageDetail from "../pageDetail";
import styles from "./whoop.module.scss";

export default new PageDetail(
    "WHOOP Inc",
    new Date(2021, 6),
    new Date(2021, 11),
    (<div className={styles.title}>whoop</div>)
);;