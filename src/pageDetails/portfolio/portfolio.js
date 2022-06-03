import PageDetail from "../pageDetail";
import styles from "./portfolio.module.scss";

export default new PageDetail(
    "Portfolio",
    new Date(2022, 1),
    new Date(2022, 6),
    "experiences/portfolio.gif",
    (<div className={styles.content}>
        <h5 className={styles.stack}> ReactJS, Materialize CSS, Sass, Figma Prototyping and Design, Illustrations</h5>
    </div>)
);