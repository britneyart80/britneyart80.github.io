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
              rel="noreferrer"
              href="https://linkedin.com/in/chenbritney/"
            >
              <img src={linkedin} alt="linkedin:chenbritney" />
              LINKED IN
            </a>
            <a
              className={styles.social}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/britneyart80"
            >
              <img src={github} alt="github:britneyart80" />
              GITHUB
            </a>
            <a
              className={styles.social}
              target="_blank"
              rel="noreferrer"
              href="mailto:britneychen08@gmail.com"
            >
              <img src={email} alt="email:britneychen08@gmail.com" />
              EMAIL
            </a>
          </div>
        </Col>
        <Col className={styles.content} l={5} m={6} s={12}>
          <p>
            Thanks for stopping by! I'm Britney - A software engineer at Tesla
            proud to be building Tesla's critical in-house data analytics
            platform for battery manufacturing. 🔋
          </p>
          <p>
            I have a track record of creating impactful, data intensive
            applications that stand out for their functionality and
            user-friendly design. I love bridging the worlds of design and
            engineering to craft products that not only drive high impact
            outcomes but also deliver great UX. I've also contributed to writing
            well-designed REST + GraphQL APIs, writing high volume data
            pipelines and building services within distributed systems.
          </p>
          <p>
            Here, you'll be able to learn more about my work experience. Outside
            of work, you can find me travelling the world, finding good eats,
            and hanging out with my parrot!
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
