import PageDetail from "../pageDetail";
import styles from "./simon.module.scss";

export default new PageDetail(
    "SIMON Markets (now iCapital)",
    new Date(2022, 5),
    new Date(2022, 7),
    "experiences/simon.png",
    "React, Redux, Figma",
    (<div className={styles.content}>
    </div>)
);