import PageDetail from "../pageDetail";
import styles from "./whoop.module.scss";

export default new PageDetail(
    "WHOOP Inc",
    new Date(2021, 6),
    new Date(2021, 11),
    "experiences/whoop.gif",
    (<div className={styles.content}>
        <h5 className={styles.stack}> ReactJS, Material UI, Java, PostgreSQL, UX Research/Design, Design Systems</h5>
        <h4>Introduction</h4>
        <p>hey there</p>
    </div>)
    
);