import { Col, Row } from "react-materialize";
import styles from "./home.module.scss";
import me from "../img/me.png";
import linkedin from "../img/linkedin.svg";
import email from "../img/email.svg";
import github from "../img/github.svg";

const Home = () => {
  return (
    <div className={styles.container}>
      <Row className={styles.row}>
        <Col l={5} m={6} s={12} className={styles.illustration}>
          <img src={me} alt="me" />
        </Col>
        <Col l={7} m={6} s={12} className={styles.content}>
          <div className={styles.colContent}>
            <h1>Hey! I'm Britney</h1>
            <h6>
              I’m a software engineer and artist with a passion for creating
              seamless and high impact user experiences. Here you can learn more
              about me and my selected projects.
            </h6>
            <div className={styles.socials}>
              <a
                className={styles.social}
                target="_blank"
                href="https://linkedin.com/in/chenbritney/"
                rel="noreferrer"
              >
                <img src={linkedin} alt="linkedin:chenbritney" />
              </a>
              <a
                className={styles.social}
                target="_blank"
                href="https://github.com/britneyart80"
                rel="noreferrer"
              >
                <img src={github} alt="github:britneyart80" />
              </a>
              <a
                className={styles.social}
                target="_blank"
                href="mailto:britneychen08@gmail.com"
                rel="noreferrer"
              >
                <img src={email} alt="email:britneychen08@gmail.com" />
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <Row className={styles.caption}>
        <p className="caption">
          DEVELOPED WITH REACT & DESIGNED BY BRITNEY CHEN
        </p>
      </Row>
    </div>
  );
};

export default Home;
