import { Col, Row } from "react-materialize";
import styles from "./home.module.scss";
import me from "../img/me.png";

const Home = () => {
  return (
    <div className={styles.container}>
      <Row className={styles.row}>
        <Col l={5} m={6} s={12} className={styles.col1}>
          <img src={me} alt="me" />
        </Col>
        <Col l={7} m={6} s={12} className={styles.col2}>
          <div className={styles.colContent}>
            <h2>Hey! I'm Britney.</h2>
            <h6>6
              I’m a front end developer and artist with a passion for creating
              seamless user experiences. Here you can learn more about me and my
              selected projects.
            </h6>
            <p>Thanks for visiting! :)</p>
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
