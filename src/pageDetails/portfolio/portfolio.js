import Image from "../../components/image/image";
import PageDetail from "../pageDetail";
import styles from "./portfolio.module.scss";

export default new PageDetail(
  "Portfolio",
  new Date(2022, 1),
  new Date(2022, 6),
  "experiences/portfolio.gif",
  "ReactJS, Materialize CSS, Sass, Figma Prototyping and Design, Illustrations",
  (
    <div className={styles.content}>
      <h5>Prototyping</h5>
      <p>
        This portfoio was first designed and prototyped using the design tool
        Figma before I started implementation. This included testing multiple versions and mocking all interactions. Below are some screenshots of my prototypes.
      </p>
      <div className={styles.triple}>
        <Image path="portfolio/art.png"/>
        <Image path="portfolio/about-compare.png"/>
        <Image path="portfolio/code.png"/>
      </div>
      <div className={styles.imgContainer}>
        <Image path="portfolio/interactions.png"/>
      </div>
      <p>Part of my prototyping and planning process was deciding on a type scale early on and defining those as Figma text components so that my prototypes would be consistent, and it would be easy to translate the designs to code later on. The values picked here are based off of a 1.25 scale ratio with 16px as a base size (go to www.type-scale.com to learn more).</p>
      <div className={styles.imgContainer}>
        <Image path="portfolio/type.png"/>
      </div>
    </div>
  )
);
