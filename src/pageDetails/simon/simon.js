import PageDetail from "../pageDetail";
import styles from "./simon.module.scss";

export default new PageDetail(
    "SIMON Markets (now iCapital)",
    new Date(2022, 6),
    new Date(2022, 8),
    "experiences/simon.png",
    "React, Redux, Figma",
    (<div className={styles.content}>
    </div>)
);