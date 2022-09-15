import { Col, Row, Parallax } from "react-materialize";
import styles from "./about.module.scss";
import headshot from "../img/headshot.jpg";
import email from "../img/email.svg";
import github from "../img/github.svg";
import linkedin from "../img/linkedin.svg";
import Image from "../components/image/image";
import { useEffect, useState } from "react";

const generatePaths = (n) => {
  let res = [];
  for (let i = 1; i < n + 1; i++) {
    res.push(`tiles/tile-${i}.JPG`);
  }
  return res;
};

const About = () => {
  let [paths, setPaths] = useState();

  useEffect(() => {
    const p = generatePaths(9);
    setPaths(p);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.bigText}>about me</div>
      <Row className={styles.row}>
        <Col m={7} s={12}>
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
        <Col className={styles.content} m={5} s={12}>
          <p>
            Thanks for stopping by! I'm Britney, a fourth year computer science
            major at Northeastern University, with a minor in interaction
            design. ​During my time at Northeastern, I've completed two fulltime co-ops and one internship which gave me real-life industry experience working and collaborating in agile teams, and has exposed me to a myriad of software and
            design technologies. I also worked on the e-board for Northeastern's
            Women in Tech Club, hosting workshops for young engineers.
          </p>
          <p>
            As an art lover, I am passionate about creating seamless and
            impactful web experiences. I believe users should be at the
            forefront of interface design and I'm so excited to help bridge the
            gap between design and engineering.
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
        <div className={styles.tiles}>
          {paths &&
            paths.map((p, index) => (
              <div className={`${styles.tile} tile-${index}`} key={index}>
                <Image path={p}></Image>
              </div>
            ))}
        </div>
      </Row>
    </div>
  );
};

export default About;
