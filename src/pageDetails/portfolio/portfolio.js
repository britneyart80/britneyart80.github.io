import Image from "../../components/image/image";
import PageDetail from "../pageDetail";
import styles from "./portfolio.module.scss";
import { Row, Col } from "react-materialize";

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
        This portfolio was first designed and prototyped using the popular
        design tool Figma before I started implementation. This included testing
        multiple versions and mocking all interactions. Below are some
        screenshots of my prototypes, including some experimental iterations.
        All illustrations within the prototype are also done by me. Click{" "}
        <a
          href="https://www.figma.com/file/o8nwczowIyRyIrYQIDXKjh/Portfolio?node-id=0%3A1"
          rel="noreferrer"
          target="_blank"
          className={styles.link}
        >
          here
        </a>{" "}
        to view the Figma board!
      </p>
      <div className={styles.triple}>
        <Image path="portfolio/art.png" />
        <Image path="portfolio/about-compare.png" />
        <Image path="portfolio/code.png" />
      </div>
      <Row className={styles.typography}>
        <Col s={12} l={6}>
          <Image path="portfolio/type.png" />
        </Col>
        <Col s={12} l={6}>
          <p>
            Part of my prototyping and planning process was deciding on a type
            scale early on and defining those as Figma text components so that
            my prototypes would be consistent, and it would be easy to translate
            the designs to code later on. The values picked here are based off
            of a 1.25 scale ratio with 16px as a base size (go to
            www.type-scale.com to learn more). Spacing within the portfolio is
            also based off of the 4/8px grid model.
          </p>
        </Col>
      </Row>

      <h5>Development</h5>
      <p>
        This portfolio was built using React and Google's Materialize CSS for
        the grid system and to build off of components. All styling, except
        global styles, for each file use sass modules so that style attributes
        are always targeted and apply where expected.
      </p>
    </div>
  ),
  "https://github.com/britneyart80/britneyart80.github.io"
);
