import { Col, Row } from "react-materialize";
import styles from "./art.module.scss";
import art from "../img/art.png";
import { useState, useEffect } from "react";
import Grid from "../components/grid/grid";

const Art = () => {
  let [paths, setPaths] = useState();

  useEffect(() => {
    let res = [];
    for (let i = 1; i < 13; i++) {
      res.push(`art/tile-${i}.jpg`);
    }
    setPaths(res);
  }, []);

  return (
    <div className={styles.container}>
      <Row className={styles.row}>
        <Col className={styles.col} m={6} s={12}>
          <div className={styles.bigText}>ART & DESIGN</div>
        </Col>
        <Col className={styles.imgCol} m={6} s={12}>
          <img src={art} alt="lifestyle" />
        </Col>
      </Row>
      <div className={styles.content}>
        <Row>
          <h4 className={styles.sectionHeader}> Art.</h4>
          <div className={styles.tiles}>
            {paths && <Grid paths={paths} boxed />}
          </div>
        </Row>
        <div>
          <h4 className={styles.sectionHeader}> Design Projects.</h4>
          <div className={styles.designContent}>
            <div className={styles.comingSoon}> COMING SOON</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
