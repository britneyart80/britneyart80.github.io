import { Col, Row, Parallax } from "react-materialize";
import styles from "./about.module.scss";
import headshot from "../img/headshot2.jpg";
import email from "../img/email.svg";
import github from "../img/github.svg";
import linkedin from "../img/linkedin.svg";
import { useEffect, useState } from "react";
import Grid from "../components/grid/grid";

const About = () => {
  let [paths, setPaths] = useState();

  useEffect(() => {
    let res = [];
    for (let i = 1; i < 10; i++) {
      res.push(`tiles/tile-${i}.JPG`);
    }
    setPaths(res);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.bigText}>about me</div>
      <Row className={styles.row}>
        <Col l={7} m={6} s={12}>
          <Parallax
            image={<img className={styles.headshot} alt="" src={headshot} />}
            options={{
              responsiveThreshold: 0,
            }}
          />
          <div className={styles.socials}>
            <p className="caption">FIND ME ON</p>
            <a
              className={styles.social}
              target="_blank"
              href="https://linkedin.com/in/britney-chen-08/"
            >
              <img src={linkedin} />
              LINKED IN
            </a>
            <a
              className={styles.social}
              target="_blank"
              href="https://github.com/britneyart80"
            >
              <img src={github} />
              GITHUB
            </a>
            <a
              className={styles.social}
              target="_blank"
              href="mailto:britneychen08@gmail.com"
            >
              <img src={email} />
              EMAIL
            </a>
          </div>
        </Col>
        <Col className={styles.content} l={5} m={6} s={12}>
          <p>
            Thanks for stopping by! I'm Britney, a fourth year computer science
            major at Northeastern University, with a minor in interaction
            design. In my work, I hope to create unique experiences through
            software solutions. I believe users should be at the forefront of
            interface design and I'm so excited to help bridge the gap between
            design and engineering.
          </p>
          <p>
            Here, you'll be able to learn more about my experiences in
            engineering and design. Outside of work, you can find me travelling
            the world, finding good eats, and hanging out with my parrot!
          </p>
        </Col>
      </Row>
      <Row className={styles.gallery}>
        <h4> Things I love.</h4>
        <div className={styles.tiles}>{paths && <Grid paths={paths} />}</div>
      </Row>
    </div>
  );
};

export default About;
