import { Col, Row, Parallax } from "react-materialize";
import styles from "./about.module.scss";
import headshot from "../img/headshot.jpg";
import email from "../img/email.svg";
import github from "../img/github.svg";
import linkedin from "../img/linkedin.svg";
import images from "./images";

const Tile = ({ imgSrc }) => {
  return (
    <div className={styles.tile}>
      <img src={imgSrc} />
    </div>
  );
};

const About = () => {
  return (
    <div className={styles.container}>
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
            design. ​
          </p>
          <p>
            I believe users should be at the forefront of interface design and
            I'm passionate about bringing impactful web experiences to life. I
            have industry experience in software engineering, worked on a myriad
            of art and design projects, and I'm excited to bring my
            interdisciplinary expertise to the table.
          </p>
          <p>
            Here, you'll be able to learn more about my experiences in
            engineering and design. Outside of work, you can find me doing this
            this and this!
          </p>
        </Col>
      </Row>
      <Row className={styles.gallery}>
        <h4> Things I love.</h4>
        <div className={styles.tiles}>
          {images.map((src, index) => (
            <Tile key={index} imgSrc={src} />
          ))}
        </div>
      </Row>
    </div>
  );
};

export default About;
